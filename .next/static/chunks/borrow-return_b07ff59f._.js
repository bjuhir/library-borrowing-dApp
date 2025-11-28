(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/borrow-return/components/Wallet-connect.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WalletConnect",
    ()=>WalletConnect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/@rainbow-me/rainbowkit/dist/index.js [app-client] (ecmascript) <locals>");
"use client";
;
;
function WalletConnect() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ConnectButton"], {
            showBalance: {
                smallScreen: false,
                largeScreen: true
            },
            chainStatus: "icon",
            accountStatus: {
                smallScreen: 'avatar',
                largeScreen: 'full'
            }
        }, void 0, false, {
            fileName: "[project]/borrow-return/components/Wallet-connect.tsx",
            lineNumber: 8,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/borrow-return/components/Wallet-connect.tsx",
        lineNumber: 7,
        columnNumber: 9
    }, this);
}
_c = WalletConnect;
var _c;
__turbopack_context__.k.register(_c, "WalletConnect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/borrow-return/lib/contract.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "contractABI",
    ()=>contractABI,
    "contractAddress",
    ()=>contractAddress
]);
const contractAddress = "0x5131d5a5FC56634C5dC8C0595ec9Ed850eC83227";
const contractABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "addItem",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "borrow",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "isAvailable",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "itemCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "items",
        "outputs": [
            {
                "internalType": "address",
                "name": "borrower",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "exists",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "returnItem",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/borrow-return/hooks/useContract.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useContract",
    ()=>useContract
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/wagmi/dist/esm/hooks/useReadContract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/wagmi/dist/esm/hooks/useWriteContract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/wagmi/dist/esm/hooks/useWaitForTransactionReceipt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$lib$2f$contract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/lib/contract.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const useContract = ()=>{
    _s();
    const { address } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"])();
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { data: itemCount, refetch: refetchItemCount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$lib$2f$contract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contractAddress"],
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$lib$2f$contract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contractABI"],
        functionName: "itemCount"
    });
    const { writeContractAsync, data: hash, error, isPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWriteContract"])();
    const { isLoading: isConfirming, isSuccess: isConfirmed } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWaitForTransactionReceipt"])({
        hash
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useContract.useEffect": ()=>{
            const loadItems = {
                "useContract.useEffect.loadItems": async ()=>{
                    if (!itemCount) return;
                    const count = Number(itemCount);
                    const loaded = [];
                    for(let i = 0; i < count; i++){
                        try {
                            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadContract"])({
                                address: __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$lib$2f$contract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contractAddress"],
                                abi: __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$lib$2f$contract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contractABI"],
                                functionName: "items",
                                args: [
                                    BigInt(i)
                                ]
                            }).data;
                            if (data) {
                                const [borrower, exists] = data;
                                loaded.push({
                                    borrower,
                                    exists
                                });
                            }
                        } catch (e) {}
                    }
                    setItems(loaded);
                }
            }["useContract.useEffect.loadItems"];
            loadItems();
        }
    }["useContract.useEffect"], [
        itemCount
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useContract.useEffect": ()=>{
            if (isConfirmed) {
                refetchItemCount();
            }
        }
    }["useContract.useEffect"], [
        isConfirmed,
        refetchItemCount
    ]);
    const addItem = async ()=>{
        try {
            setIsLoading(true);
            await writeContractAsync({
                address: __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$lib$2f$contract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contractAddress"],
                abi: __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$lib$2f$contract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contractABI"],
                functionName: "addItem"
            });
        } finally{
            setIsLoading(false);
        }
    };
    const borrowItem = async (id)=>{
        try {
            setIsLoading(true);
            await writeContractAsync({
                address: __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$lib$2f$contract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contractAddress"],
                abi: __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$lib$2f$contract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contractABI"],
                functionName: "borrow",
                args: [
                    BigInt(id)
                ]
            });
        } finally{
            setIsLoading(false);
        }
    };
    const returnItem = async (id)=>{
        try {
            setIsLoading(true);
            await writeContractAsync({
                address: __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$lib$2f$contract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contractAddress"],
                abi: __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$lib$2f$contract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contractABI"],
                functionName: "returnItem",
                args: [
                    BigInt(id)
                ]
            });
        } finally{
            setIsLoading(false);
        }
    };
    const data = {
        itemCount: itemCount ? Number(itemCount) : 0,
        items
    };
    const actions = {
        addItem,
        borrowItem,
        returnItem
    };
    const state = {
        isLoading: isLoading || isPending || isConfirming,
        isPending,
        isConfirming,
        isConfirmed,
        hash,
        error
    };
    return {
        data,
        actions,
        state
    };
};
_s(useContract, "q1eYJIcz52XqjgdTIg3XhP6nO5o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"],
        __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadContract"],
        __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWriteContract"],
        __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWaitForTransactionReceipt"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/borrow-return/components/sample.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$hooks$2f$useContract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/hooks/useContract.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const SampleIntregation = ()=>{
    _s();
    const { isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"])();
    const [itemId, setItemId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const { data, actions, state } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$hooks$2f$useContract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContract"])();
    const handleBorrow = async ()=>{
        const id = Number(itemId);
        if (isNaN(id)) return;
        await actions.borrowItem(id);
    };
    const handleReturn = async ()=>{
        const id = Number(itemId);
        if (isNaN(id)) return;
        await actions.returnItem(id);
    };
    if (!isConnected) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Please connect your wallet."
            }, void 0, false, {
                fileName: "[project]/borrow-return/components/sample.tsx",
                lineNumber: 28,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/borrow-return/components/sample.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen p-4 max-w-xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold mb-6",
                children: "Library Borrow Contract"
            }, void 0, false, {
                fileName: "[project]/borrow-return/components/sample.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 p-4 border rounded",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-semibold",
                    children: [
                        "Total Items: ",
                        data.itemCount
                    ]
                }, void 0, true, {
                    fileName: "[project]/borrow-return/components/sample.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/borrow-return/components/sample.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: actions.addItem,
                        disabled: state.isLoading,
                        className: "w-full px-4 py-2 bg-primary text-white rounded",
                        children: state.isLoading ? "Processing..." : "Add Item"
                    }, void 0, false, {
                        fileName: "[project]/borrow-return/components/sample.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "number",
                        className: "w-full px-3 py-2 border rounded",
                        placeholder: "Item ID",
                        value: itemId,
                        onChange: (e)=>setItemId(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/borrow-return/components/sample.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleBorrow,
                        disabled: state.isLoading,
                        className: "w-full px-4 py-2 bg-blue-500 text-white rounded",
                        children: "Borrow Item"
                    }, void 0, false, {
                        fileName: "[project]/borrow-return/components/sample.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleReturn,
                        disabled: state.isLoading,
                        className: "w-full px-4 py-2 bg-red-500 text-white rounded",
                        children: "Return Item"
                    }, void 0, false, {
                        fileName: "[project]/borrow-return/components/sample.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/borrow-return/components/sample.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            state.hash && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 p-4 border rounded",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs",
                        children: "Tx Hash:"
                    }, void 0, false, {
                        fileName: "[project]/borrow-return/components/sample.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "break-all",
                        children: state.hash
                    }, void 0, false, {
                        fileName: "[project]/borrow-return/components/sample.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    state.isConfirming && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Confirming..."
                    }, void 0, false, {
                        fileName: "[project]/borrow-return/components/sample.tsx",
                        lineNumber: 79,
                        columnNumber: 34
                    }, ("TURBOPACK compile-time value", void 0)),
                    state.isConfirmed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-green-600",
                        children: "Confirmed!"
                    }, void 0, false, {
                        fileName: "[project]/borrow-return/components/sample.tsx",
                        lineNumber: 80,
                        columnNumber: 33
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/borrow-return/components/sample.tsx",
                lineNumber: 76,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            state.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 text-red-600",
                children: [
                    "Error: ",
                    state.error.message
                ]
            }, void 0, true, {
                fileName: "[project]/borrow-return/components/sample.tsx",
                lineNumber: 85,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/borrow-return/components/sample.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SampleIntregation, "UiMLOaKh6pOb3PRBECb4LYgFVpk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"],
        __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$hooks$2f$useContract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContract"]
    ];
});
_c = SampleIntregation;
const __TURBOPACK__default__export__ = SampleIntregation;
var _c;
__turbopack_context__.k.register(_c, "SampleIntregation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/borrow-return/node_modules/@wagmi/core/dist/esm/query/readContract.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "readContractQueryKey",
    ()=>readContractQueryKey,
    "readContractQueryOptions",
    ()=>readContractQueryOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/@wagmi/core/dist/esm/actions/readContract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/@wagmi/core/dist/esm/query/utils.js [app-client] (ecmascript)");
;
;
function readContractQueryOptions(config) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return {
        // TODO: Support `signal` once Viem actions allow passthrough
        // https://tkdodo.eu/blog/why-you-want-react-query#bonus-cancellation
        async queryFn (param) {
            let { queryKey } = param;
            const abi = options.abi;
            if (!abi) throw new Error('abi is required');
            const { functionName, scopeKey: _, ...parameters } = queryKey[1];
            const addressOrCodeParams = (()=>{
                const params = queryKey[1];
                if (params.address) return {
                    address: params.address
                };
                if (params.code) return {
                    code: params.code
                };
                throw new Error('address or code is required');
            })();
            if (!functionName) throw new Error('functionName is required');
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readContract"])(config, {
                abi,
                functionName,
                args: parameters.args,
                ...addressOrCodeParams,
                ...parameters
            });
        },
        queryKey: readContractQueryKey(options)
    };
}
function readContractQueryKey() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { abi: _, ...rest } = options;
    return [
        'readContract',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterQueryOptions"])(rest)
    ];
} //# sourceMappingURL=readContract.js.map
}),
"[project]/borrow-return/node_modules/wagmi/dist/esm/hooks/useReadContract.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useReadContract",
    ()=>useReadContract
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/@wagmi/core/dist/esm/query/readContract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/@wagmi/core/dist/esm/query/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/wagmi/dist/esm/utils/query.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
'use client';
;
;
;
;
function useReadContract() {
    let parameters = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { abi, address, functionName, query = {} } = parameters;
    // @ts-ignore
    const code = parameters.code;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChainId"])({
        config
    });
    var _parameters_chainId;
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readContractQueryOptions"])(config, {
        ...parameters,
        chainId: (_parameters_chainId = parameters.chainId) !== null && _parameters_chainId !== void 0 ? _parameters_chainId : chainId
    });
    var _query_enabled;
    const enabled = Boolean((address || code) && abi && functionName && ((_query_enabled = query.enabled) !== null && _query_enabled !== void 0 ? _query_enabled : true));
    var _query_structuralSharing;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useQuery"])({
        ...query,
        ...options,
        enabled,
        structuralSharing: (_query_structuralSharing = query.structuralSharing) !== null && _query_structuralSharing !== void 0 ? _query_structuralSharing : __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["structuralSharing"]
    });
} //# sourceMappingURL=useReadContract.js.map
}),
"[project]/borrow-return/node_modules/viem/_esm/utils/chain/assertCurrentChain.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertCurrentChain",
    ()=>assertCurrentChain
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$chain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/viem/_esm/errors/chain.js [app-client] (ecmascript)");
;
function assertCurrentChain(param) {
    let { chain, currentChainId } = param;
    if (!chain) throw new __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$chain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainNotFoundError"]();
    if (currentChainId !== chain.id) throw new __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$chain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainMismatchError"]({
        chain,
        currentChainId
    });
} //# sourceMappingURL=assertCurrentChain.js.map
}),
"[project]/borrow-return/node_modules/viem/_esm/actions/wallet/sendTransaction.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendTransaction",
    ()=>sendTransaction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/viem/_esm/errors/account.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/viem/_esm/errors/base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$authorization$2f$recoverAuthorizationAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/viem/_esm/utils/authorization/recoverAuthorizationAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$assertCurrentChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/viem/_esm/utils/chain/assertCurrentChain.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getTransactionError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/viem/_esm/utils/errors/getTransactionError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$extract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/viem/_esm/utils/formatters/extract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/viem/_esm/utils/formatters/transactionRequest.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$lru$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/viem/_esm/utils/lru.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/viem/_esm/utils/transaction/assertRequest.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/viem/_esm/actions/public/getChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$prepareTransactionRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/viem/_esm/actions/wallet/prepareTransactionRequest.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendRawTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/viem/_esm/actions/wallet/sendRawTransaction.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const supportsWalletNamespace = new __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$lru$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LruMap"](128);
async function sendTransaction(client, parameters) {
    const { account: account_ = client.account, chain = client.chain, accessList, authorizationList, blobs, data, gas, gasPrice, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, nonce, type, value, ...rest } = parameters;
    if (typeof account_ === 'undefined') throw new __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountNotFoundError"]({
        docsPath: '/docs/actions/wallet/sendTransaction'
    });
    const account = account_ ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAccount"])(account_) : null;
    try {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertRequest"])(parameters);
        const to = await (async ()=>{
            // If `to` exists on the parameters, use that.
            if (parameters.to) return parameters.to;
            // If `to` is null, we are sending a deployment transaction.
            if (parameters.to === null) return undefined;
            // If no `to` exists, and we are sending a EIP-7702 transaction, use the
            // address of the first authorization in the list.
            if (authorizationList && authorizationList.length > 0) return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$authorization$2f$recoverAuthorizationAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recoverAuthorizationAddress"])({
                authorization: authorizationList[0]
            }).catch(()=>{
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"]('`to` is required. Could not infer from `authorizationList`.');
            });
            // Otherwise, we are sending a deployment transaction.
            return undefined;
        })();
        if ((account === null || account === void 0 ? void 0 : account.type) === 'json-rpc' || account === null) {
            var _client_chain_formatters_transactionRequest, _client_chain_formatters, _client_chain;
            let chainId;
            if (chain !== null) {
                chainId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainId"], 'getChainId')({});
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$assertCurrentChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertCurrentChain"])({
                    currentChainId: chainId,
                    chain
                });
            }
            const chainFormat = (_client_chain = client.chain) === null || _client_chain === void 0 ? void 0 : (_client_chain_formatters = _client_chain.formatters) === null || _client_chain_formatters === void 0 ? void 0 : (_client_chain_formatters_transactionRequest = _client_chain_formatters.transactionRequest) === null || _client_chain_formatters_transactionRequest === void 0 ? void 0 : _client_chain_formatters_transactionRequest.format;
            const format = chainFormat || __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTransactionRequest"];
            const request = format({
                // Pick out extra data that might exist on the chain's transaction request type.
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$extract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extract"])(rest, {
                    format: chainFormat
                }),
                accessList,
                account,
                authorizationList,
                blobs,
                chainId,
                data,
                gas,
                gasPrice,
                maxFeePerBlobGas,
                maxFeePerGas,
                maxPriorityFeePerGas,
                nonce,
                to,
                type,
                value
            }, 'sendTransaction');
            const isWalletNamespaceSupported = supportsWalletNamespace.get(client.uid);
            const method = isWalletNamespaceSupported ? 'wallet_sendTransaction' : 'eth_sendTransaction';
            try {
                return await client.request({
                    method,
                    params: [
                        request
                    ]
                }, {
                    retryCount: 0
                });
            } catch (e) {
                if (isWalletNamespaceSupported === false) throw e;
                const error = e;
                // If the transport does not support the method or input, attempt to use the
                // `wallet_sendTransaction` method.
                if (error.name === 'InvalidInputRpcError' || error.name === 'InvalidParamsRpcError' || error.name === 'MethodNotFoundRpcError' || error.name === 'MethodNotSupportedRpcError') {
                    return await client.request({
                        method: 'wallet_sendTransaction',
                        params: [
                            request
                        ]
                    }, {
                        retryCount: 0
                    }).then((hash)=>{
                        supportsWalletNamespace.set(client.uid, true);
                        return hash;
                    }).catch((e)=>{
                        const walletNamespaceError = e;
                        if (walletNamespaceError.name === 'MethodNotFoundRpcError' || walletNamespaceError.name === 'MethodNotSupportedRpcError') {
                            supportsWalletNamespace.set(client.uid, false);
                            throw error;
                        }
                        throw walletNamespaceError;
                    });
                }
                throw error;
            }
        }
        if ((account === null || account === void 0 ? void 0 : account.type) === 'local') {
            var _chain_serializers;
            // Prepare the request for signing (assign appropriate fees, etc.)
            const request = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$prepareTransactionRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareTransactionRequest"], 'prepareTransactionRequest')({
                account,
                accessList,
                authorizationList,
                blobs,
                chain,
                data,
                gas,
                gasPrice,
                maxFeePerBlobGas,
                maxFeePerGas,
                maxPriorityFeePerGas,
                nonce,
                nonceManager: account.nonceManager,
                parameters: [
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$prepareTransactionRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultParameters"],
                    'sidecars'
                ],
                type,
                value,
                ...rest,
                to
            });
            const serializer = chain === null || chain === void 0 ? void 0 : (_chain_serializers = chain.serializers) === null || _chain_serializers === void 0 ? void 0 : _chain_serializers.transaction;
            const serializedTransaction = await account.signTransaction(request, {
                serializer
            });
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendRawTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendRawTransaction"], 'sendRawTransaction')({
                serializedTransaction
            });
        }
        if ((account === null || account === void 0 ? void 0 : account.type) === 'smart') throw new __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountTypeNotSupportedError"]({
            metaMessages: [
                'Consider using the `sendUserOperation` Action instead.'
            ],
            docsPath: '/docs/actions/bundler/sendUserOperation',
            type: 'smart'
        });
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountTypeNotSupportedError"]({
            docsPath: '/docs/actions/wallet/sendTransaction',
            type: account === null || account === void 0 ? void 0 : account.type
        });
    } catch (err) {
        if (err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountTypeNotSupportedError"]) throw err;
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getTransactionError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransactionError"])(err, {
            ...parameters,
            account,
            chain: parameters.chain || undefined
        });
    }
} //# sourceMappingURL=sendTransaction.js.map
}),
"[project]/borrow-return/node_modules/viem/_esm/actions/wallet/writeContract.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "writeContract",
    ()=>writeContract
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/viem/_esm/errors/account.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getContractError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/viem/_esm/utils/errors/getContractError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/viem/_esm/actions/wallet/sendTransaction.js [app-client] (ecmascript)");
;
;
;
;
;
;
async function writeContract(client, parameters) {
    return writeContract.internal(client, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendTransaction"], 'sendTransaction', parameters);
}
(function(writeContract) {
    async function internal(client, actionFn, name, parameters) {
        const { abi, account: account_ = client.account, address, args, dataSuffix, functionName, ...request } = parameters;
        if (typeof account_ === 'undefined') throw new __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountNotFoundError"]({
            docsPath: '/docs/contract/writeContract'
        });
        const account = account_ ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAccount"])(account_) : null;
        const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
            abi,
            args,
            functionName
        });
        try {
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, actionFn, name)({
                data: "".concat(data).concat(dataSuffix ? dataSuffix.replace('0x', '') : ''),
                to: address,
                account,
                ...request
            });
        } catch (error) {
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getContractError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContractError"])(error, {
                abi,
                address,
                args,
                docsPath: '/docs/contract/writeContract',
                functionName,
                sender: account === null || account === void 0 ? void 0 : account.address
            });
        }
    }
    writeContract.internal = internal;
})(writeContract || (writeContract = {})); //# sourceMappingURL=writeContract.js.map
}),
"[project]/borrow-return/node_modules/@wagmi/core/dist/esm/actions/writeContract.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "writeContract",
    ()=>writeContract
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$writeContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/viem/_esm/actions/wallet/writeContract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/@wagmi/core/dist/esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnectorClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/@wagmi/core/dist/esm/actions/getConnectorClient.js [app-client] (ecmascript)");
;
;
;
async function writeContract(config, parameters) {
    const { account, chainId, connector, ...request } = parameters;
    let client;
    if (typeof account === 'object' && (account === null || account === void 0 ? void 0 : account.type) === 'local') client = config.getClient({
        chainId
    });
    else client = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnectorClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConnectorClient"])(config, {
        account: account !== null && account !== void 0 ? account : undefined,
        assertChainId: false,
        chainId,
        connector
    });
    const action = (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$writeContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeContract"], 'writeContract');
    const hash = await action({
        ...request,
        ...account ? {
            account
        } : {},
        chain: chainId ? {
            id: chainId
        } : null
    });
    return hash;
} //# sourceMappingURL=writeContract.js.map
}),
"[project]/borrow-return/node_modules/@wagmi/core/dist/esm/query/writeContract.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "writeContractMutationOptions",
    ()=>writeContractMutationOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$writeContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/@wagmi/core/dist/esm/actions/writeContract.js [app-client] (ecmascript)");
;
function writeContractMutationOptions(config) {
    return {
        mutationFn (variables) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$writeContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeContract"])(config, variables);
        },
        mutationKey: [
            'writeContract'
        ]
    };
} //# sourceMappingURL=writeContract.js.map
}),
"[project]/borrow-return/node_modules/wagmi/dist/esm/hooks/useWriteContract.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useWriteContract",
    ()=>useWriteContract
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$writeContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/@wagmi/core/dist/esm/query/writeContract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
'use client';
;
;
;
function useWriteContract() {
    let parameters = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { mutation } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const mutationOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$writeContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeContractMutationOptions"])(config);
    const { mutate, mutateAsync, ...result } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        ...mutation,
        ...mutationOptions
    });
    return {
        ...result,
        writeContract: mutate,
        writeContractAsync: mutateAsync
    };
} //# sourceMappingURL=useWriteContract.js.map
}),
"[project]/borrow-return/node_modules/@wagmi/core/dist/esm/actions/waitForTransactionReceipt.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "waitForTransactionReceipt",
    ()=>waitForTransactionReceipt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/viem/_esm/utils/encoding/fromHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/viem/_esm/actions/public/call.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/viem/_esm/actions/public/getTransaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$waitForTransactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/viem/_esm/actions/public/waitForTransactionReceipt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/@wagmi/core/dist/esm/utils/getAction.js [app-client] (ecmascript)");
;
;
;
async function waitForTransactionReceipt(config, parameters) {
    const { chainId, timeout = 0, ...rest } = parameters;
    const client = config.getClient({
        chainId
    });
    const action = (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$waitForTransactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["waitForTransactionReceipt"], 'waitForTransactionReceipt');
    const receipt = await action({
        ...rest,
        timeout
    });
    if (receipt.status === 'reverted') {
        const action_getTransaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransaction"], 'getTransaction');
        const { from: account, ...txn } = await action_getTransaction({
            hash: receipt.transactionHash
        });
        const action_call = (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["call"], 'call');
        const code = await action_call({
            ...txn,
            account,
            data: txn.input,
            gasPrice: txn.type !== 'eip1559' ? txn.gasPrice : undefined,
            maxFeePerGas: txn.type === 'eip1559' ? txn.maxFeePerGas : undefined,
            maxPriorityFeePerGas: txn.type === 'eip1559' ? txn.maxPriorityFeePerGas : undefined
        });
        const reason = (code === null || code === void 0 ? void 0 : code.data) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToString"])("0x".concat(code.data.substring(138))) : 'unknown reason';
        throw new Error(reason);
    }
    return {
        ...receipt,
        chainId: client.chain.id
    };
} //# sourceMappingURL=waitForTransactionReceipt.js.map
}),
"[project]/borrow-return/node_modules/@wagmi/core/dist/esm/query/waitForTransactionReceipt.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "waitForTransactionReceiptQueryKey",
    ()=>waitForTransactionReceiptQueryKey,
    "waitForTransactionReceiptQueryOptions",
    ()=>waitForTransactionReceiptQueryOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$waitForTransactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/@wagmi/core/dist/esm/actions/waitForTransactionReceipt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/@wagmi/core/dist/esm/query/utils.js [app-client] (ecmascript)");
;
;
function waitForTransactionReceiptQueryOptions(config) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return {
        async queryFn (param) {
            let { queryKey } = param;
            const { hash, ...parameters } = queryKey[1];
            if (!hash) throw new Error('hash is required');
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$waitForTransactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["waitForTransactionReceipt"])(config, {
                ...parameters,
                onReplaced: options.onReplaced,
                hash
            });
        },
        queryKey: waitForTransactionReceiptQueryKey(options)
    };
}
function waitForTransactionReceiptQueryKey() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { onReplaced: _, ...rest } = options;
    return [
        'waitForTransactionReceipt',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterQueryOptions"])(rest)
    ];
} //# sourceMappingURL=waitForTransactionReceipt.js.map
}),
"[project]/borrow-return/node_modules/wagmi/dist/esm/hooks/useWaitForTransactionReceipt.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useWaitForTransactionReceipt",
    ()=>useWaitForTransactionReceipt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$waitForTransactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/@wagmi/core/dist/esm/query/waitForTransactionReceipt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/wagmi/dist/esm/utils/query.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/borrow-return/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
'use client';
;
;
;
;
function useWaitForTransactionReceipt() {
    let parameters = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { hash, query = {} } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChainId"])({
        config
    });
    var _parameters_chainId;
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$waitForTransactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["waitForTransactionReceiptQueryOptions"])(config, {
        ...parameters,
        chainId: (_parameters_chainId = parameters.chainId) !== null && _parameters_chainId !== void 0 ? _parameters_chainId : chainId
    });
    var _query_enabled;
    const enabled = Boolean(hash && ((_query_enabled = query.enabled) !== null && _query_enabled !== void 0 ? _query_enabled : true));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$borrow$2d$return$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useQuery"])({
        ...query,
        ...options,
        enabled
    });
} //# sourceMappingURL=useWaitForTransactionReceipt.js.map
}),
]);

//# sourceMappingURL=borrow-return_b07ff59f._.js.map