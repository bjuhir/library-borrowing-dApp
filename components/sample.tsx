"use client"

import { useState } from "react"
import { useAccount } from "wagmi"
import { useContract } from "@/hooks/useContract"

const SampleIntregation = () => {
  const { isConnected } = useAccount()
  const [itemId, setItemId] = useState("")

  const { data, actions, state } = useContract()

  const handleBorrow = async () => {
    const id = Number(itemId)
    if (isNaN(id)) return
    await actions.borrowItem(id)
  }

  const handleReturn = async () => {
    const id = Number(itemId)
    if (isNaN(id)) return
    await actions.returnItem(id)
  }

  if (!isConnected) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <p>Please connect your wallet.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-4 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Library Borrow Contract</h1>

      <div className="mb-4 p-4 border rounded">
        <p className="font-semibold">Total Items: {data.itemCount}</p>
      </div>

      <div className="space-y-4">
        <button
          onClick={actions.addItem}
          disabled={state.isLoading}
          className="w-full px-4 py-2 bg-primary text-white rounded"
        >
          {state.isLoading ? "Processing..." : "Add Item"}
        </button>

        <input
          type="number"
          className="w-full px-3 py-2 border rounded"
          placeholder="Item ID"
          value={itemId}
          onChange={(e) => setItemId(e.target.value)}
        />

        <button
          onClick={handleBorrow}
          disabled={state.isLoading}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded"
        >
          Borrow Item
        </button>

        <button
          onClick={handleReturn}
          disabled={state.isLoading}
          className="w-full px-4 py-2 bg-red-500 text-white rounded"
        >
          Return Item
        </button>
      </div>

      {state.hash && (
        <div className="mt-6 p-4 border rounded">
          <p className="text-xs">Tx Hash:</p>
          <p className="break-all">{state.hash}</p>
          {state.isConfirming && <p>Confirming...</p>}
          {state.isConfirmed && <p className="text-green-600">Confirmed!</p>}
        </div>
      )}

      {state.error && (
        <p className="mt-4 text-red-600">Error: {state.error.message}</p>
      )}
    </div>
  )
}

export default SampleIntregation
