"use client"

import { useState, useEffect } from "react"
import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from "wagmi"
import { contractABI, contractAddress } from "@/lib/contract"

export interface ItemData {
  borrower: string
  exists: boolean
}

export interface ContractData {
  itemCount: number
  items: ItemData[]
}

export interface ContractState {
  isLoading: boolean
  isPending: boolean
  isConfirming: boolean
  isConfirmed: boolean
  hash: `0x${string}` | undefined
  error: Error | null
}

export interface ContractActions {
  addItem: () => Promise<void>
  borrowItem: (id: number) => Promise<void>
  returnItem: (id: number) => Promise<void>
}

export const useContract = () => {
  const { address } = useAccount()
  const [items, setItems] = useState<ItemData[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const { data: itemCount, refetch: refetchItemCount } = useReadContract({
    address: contractAddress,
    abi: contractABI,
    functionName: "itemCount",
  })

  const { writeContractAsync, data: hash, error, isPending } = useWriteContract()

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash })

  useEffect(() => {
    const loadItems = async () => {
      if (!itemCount) return

      const count = Number(itemCount)
      const loaded: ItemData[] = []

      for (let i = 0; i < count; i++) {
        try {
          const data = await useReadContract({
            address: contractAddress,
            abi: contractABI,
            functionName: "items",
            args: [BigInt(i)],
          }).data

          if (data) {
            const [borrower, exists] = data as any
            loaded.push({ borrower, exists })
          }
        } catch {}
      }

      setItems(loaded)
    }

    loadItems()
  }, [itemCount])

  useEffect(() => {
    if (isConfirmed) {
      refetchItemCount()
    }
  }, [isConfirmed, refetchItemCount])

  const addItem = async () => {
    try {
      setIsLoading(true)
      await writeContractAsync({
        address: contractAddress,
        abi: contractABI,
        functionName: "addItem",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const borrowItem = async (id: number) => {
    try {
      setIsLoading(true)
      await writeContractAsync({
        address: contractAddress,
        abi: contractABI,
        functionName: "borrow",
        args: [BigInt(id)],
      })
    } finally {
      setIsLoading(false)
    }
  }

  const returnItem = async (id: number) => {
    try {
      setIsLoading(true)
      await writeContractAsync({
        address: contractAddress,
        abi: contractABI,
        functionName: "returnItem",
        args: [BigInt(id)],
      })
    } finally {
      setIsLoading(false)
    }
  }

  const data: ContractData = {
    itemCount: itemCount ? Number(itemCount) : 0,
    items,
  }

  const actions: ContractActions = {
    addItem,
    borrowItem,
    returnItem,
  }

  const state: ContractState = {
    isLoading: isLoading || isPending || isConfirming,
    isPending,
    isConfirming,
    isConfirmed,
    hash,
    error,
  }

  return { data, actions, state }
}
