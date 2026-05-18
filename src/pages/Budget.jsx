import { useState } from 'react'

const Budget = () => {

  const [showModal, setShowModal] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('Food')

  const budgets = [
    {
      icon: '🚗',
      name: 'Transport',
      spent: 320,
      limit: 800,
      color: '#10B981',
      bgColor: '#DBEAFE',
      percent: 40,
      status: 'good'
    },
    {
      icon: '💊',
      name: 'Health',
      spent: 350,
      limit: 1000,
      color: '#10B981',
      bgColor: '#FEE2E2',
      percent: 35,
      status: 'good'
    },
    {
      icon: '🍕',
      name: 'Food',
      spent: 2400,
      limit: 3000,
      color: '#F59E0B',
      bgColor: '#FEF3C7',
      percent: 80,
      status: 'warning'
    },
    {
      icon: '🎬',
      name: 'Entertainment',
      spent: 870,
      limit: 1000,
      color: '#F59E0B',
      bgColor: '#EDE9FE',
      percent: 87,
      status: 'warning'
    },
    {
      icon: '🛍️',
      name: 'Shopping',
      spent: 3800,
      limit: 3000,
      color: '#EF4444',
      bgColor: '#EDE9FE',
      percent: 100,
      status: 'exceeded'
    },
  ]

  const categories = [
    { icon: '🍕', name: 'Food' },
    { icon: '🛍️', name: 'Shopping' },
    { icon: '🚗', name: 'Transport' },
    { icon: '🎬', name: 'Entertainment' },
    { icon: '💊', name: 'Health' },
    { icon: '📚', name: 'Education' },
    { icon: '🏠', name: 'Rent' },
    { icon: '📦', name: 'Others' },
  ]

  const goodBudgets = budgets.filter(b => b.status === 'good')
  const warningBudgets = budgets.filter(b => b.status === 'warning')
  const exceededBudgets = budgets.filter(b => b.status === 'exceeded')

  const BudgetCard = ({ budget }) => (
    <div className={`bg-white rounded-2xl p-5 
                    mb-3 shadow-sm border
                    hover:-translate-y-0.5
                    transition-all duration-200
                    ${budget.status === 'exceeded' ? 
                      'border-red-100' : 
                      'border-gray-50'}`}>

      {/* Top Row */}
      <div className="flex items-center 
                      justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl 
                          flex items-center 
                          justify-center text-xl"
               style={{background: budget.bgColor}}>
            {budget.icon}
          </div>
          <div>
            <p className="text-sm font-semibold 
                          text-gray-800">
              {budget.name}
            </p>
            <p className="text-xs text-gray-400">
              November 2024
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="text-right">
            <p className={`text-base font-bold
              ${budget.status === 'exceeded' ? 
                'text-red-500' : 'text-gray-800'}`}>
              ₹{budget.spent.toLocaleString()}
            </p>
            <p className="text-xs text-gray-400">
              of ₹{budget.limit.toLocaleString()}
            </p>
          </div>
          <div className="flex gap-1 ml-2">
            <button className="p-1.5 rounded-lg 
                               hover:bg-gray-100 
                               text-sm transition-all">
              ✏️
            </button>
            <button className="p-1.5 rounded-lg 
                               hover:bg-gray-100 
                               text-sm transition-all">
              🗑️
            </button>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-2 bg-gray-100 
                      rounded-full mb-3 
                      overflow-hidden">
        <div className="h-full rounded-full 
                        transition-all duration-700"
             style={{
               width: `${budget.percent}%`,
               background: budget.color
             }}>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex items-center 
                      justify-between">
        {budget.status === 'good' && (
          <span className="text-xs font-medium 
                           px-3 py-1 rounded-full
                           bg-green-50 text-green-600">
            ✅ {budget.percent}% used
          </span>
        )}
        {budget.status === 'warning' && (
          <span className="text-xs font-medium 
                           px-3 py-1 rounded-full
                           bg-yellow-50 text-yellow-600">
            ⚠️ {budget.percent}% used
          </span>
        )}
        {budget.status === 'exceeded' && (
          <span className="text-xs font-medium 
                           px-3 py-1 rounded-full
                           bg-red-50 text-red-500">
            🔴 Exceeded by ₹
            {(budget.spent - budget.limit)
              .toLocaleString()}
          </span>
        )}

        <span className="text-xs text-gray-400">
          {budget.status === 'exceeded' ?
            'Over budget!' :
            `₹${(budget.limit - budget.spent)
              .toLocaleString()} remaining`
          }
        </span>
      </div>
    </div>
  )

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* NAVBAR */}
      <nav className="bg-white px-10 py-3
                      flex items-center
                      justify-between shadow-sm
                      sticky top-0 z-50">
        <h1 className="text-blue-600 text-xl
                       font-bold">
          Trackfi.ai
        </h1>
        <ul className="flex gap-8 list-none">
          <li>
            <a href="/dashboard"
               className="text-gray-500 text-sm">
              📊 Dashboard
            </a>
          </li>
          <li>
            <a href="/upload"
               className="text-gray-500 text-sm">
              📄 Upload
            </a>
          </li>
          <li>
            <a href="/budget"
               className="text-blue-600 text-sm
                          font-semibold">
              🎯 Budget
            </a>
          </li>
          <li>
            <a href="#"
               className="text-gray-500 text-sm">
              💡 Insights
            </a>
          </li>
        </ul>
        <div className="w-8 h-8 bg-blue-600
                        rounded-full flex
                        items-center justify-center
                        text-white font-bold text-sm">
          S
        </div>
      </nav>

      {/* MAIN */}
      <div className="max-w-3xl mx-auto 
                      py-8 px-6">

        {/* HEADER */}
        <div className="flex items-center
                        justify-between mb-7">
          <div>
            <h1 className="font-playfair text-2xl
                           font-bold text-gray-900">
              Budget Goals 🎯
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Set and track your monthly 
              spending limits
            </p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white
                       px-5 py-2.5 rounded-xl
                       text-sm font-semibold
                       hover:bg-blue-700
                       transition-all duration-200
                       flex items-center gap-2">
            + Add Budget
          </button>
        </div>

        {/* SUMMARY CARDS */}
        <div className="grid grid-cols-3 
                        gap-4 mb-7">
          <div className="bg-white rounded-2xl 
                          p-5 shadow-sm">
            <p className="text-xs text-gray-400
                          uppercase tracking-wide mb-2">
              Total Budget
            </p>
            <p className="text-2xl font-bold
                          text-blue-600">
              ₹15,800
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Monthly limit set
            </p>
          </div>
          <div className="bg-white rounded-2xl
                          p-5 shadow-sm">
            <p className="text-xs text-gray-400
                          uppercase tracking-wide mb-2">
              Total Spent
            </p>
            <p className="text-2xl font-bold
                          text-red-500">
              ₹11,240
            </p>
            <p className="text-xs text-gray-400 mt-1">
              71% of budget used
            </p>
          </div>
          <div className="bg-white rounded-2xl
                          p-5 shadow-sm">
            <p className="text-xs text-gray-400
                          uppercase tracking-wide mb-2">
              Remaining
            </p>
            <p className="text-2xl font-bold
                          text-green-500">
              ₹4,560
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Left to spend
            </p>
          </div>
        </div>

        {/* ON TRACK */}
        {goodBudgets.length > 0 && (
          <div className="mb-2">
            <div className="flex items-center 
                            gap-3 mb-3">
              <p className="text-sm font-semibold
                            text-gray-600">
                ✅ On Track
              </p>
              <div className="flex-1 h-px 
                              bg-gray-200"></div>
            </div>
            {goodBudgets.map((b, i) => (
              <BudgetCard key={i} budget={b} />
            ))}
          </div>
        )}

        {/* WARNING */}
        {warningBudgets.length > 0 && (
          <div className="mb-2">
            <div className="flex items-center 
                            gap-3 mb-3">
              <p className="text-sm font-semibold
                            text-gray-600">
                ⚠️ Near Limit
              </p>
              <div className="flex-1 h-px
                              bg-gray-200"></div>
            </div>
            {warningBudgets.map((b, i) => (
              <BudgetCard key={i} budget={b} />
            ))}
          </div>
        )}

        {/* EXCEEDED */}
        {exceededBudgets.length > 0 && (
          <div className="mb-2">
            <div className="flex items-center 
                            gap-3 mb-3">
              <p className="text-sm font-semibold
                            text-gray-600">
                🔴 Exceeded
              </p>
              <div className="flex-1 h-px
                              bg-gray-200"></div>
            </div>
            {exceededBudgets.map((b, i) => (
              <BudgetCard key={i} budget={b} />
            ))}
          </div>
        )}

        {/* AI TIPS */}
        <div className="bg-gradient-to-br
                        from-blue-700 to-blue-500
                        rounded-2xl p-6 
                        text-white mt-4">
          <h3 className="text-base font-semibold mb-4">
            💡 AI Budget Tips
          </h3>
          <div className="flex gap-3 mb-3">
            <span>🍕</span>
            <p className="text-sm opacity-90">
              Food budget 80% used — try cooking 
              at home to save ₹600!
            </p>
          </div>
          <div className="flex gap-3 mb-3">
            <span>🛍️</span>
            <p className="text-sm opacity-90">
              Shopping exceeded by ₹800 — 
              consider cutting back next month.
            </p>
          </div>
          <div className="flex gap-3">
            <span>✅</span>
            <p className="text-sm opacity-90">
              Great job on Transport! 
              Saving ₹480 this month!
            </p>
          </div>
        </div>

      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 
                        bg-black/50 
                        flex items-center 
                        justify-center z-50"
             onClick={(e) => {
               if (e.target === e.currentTarget)
                 setShowModal(false)
             }}>
          <div className="bg-white rounded-2xl 
                          p-8 w-[440px] 
                          shadow-2xl">
            <h3 className="font-playfair text-xl
                           font-bold text-gray-900 mb-6">
              Set Budget Goal 🎯
            </h3>

            {/* Category Grid */}
            <p className="text-sm font-semibold
                          text-gray-700 mb-3">
              Category
            </p>
            <div className="grid grid-cols-4 
                            gap-2 mb-5">
              {categories.map((cat) => (
                <div
                  key={cat.name}
                  onClick={() => 
                    setSelectedCategory(cat.name)}
                  className={`border-2 rounded-xl 
                              p-2 text-center 
                              cursor-pointer 
                              transition-all text-xs
                    ${selectedCategory === cat.name ?
                      'border-blue-500 bg-blue-50 text-blue-600 font-semibold' :
                      'border-gray-200 text-gray-500 hover:border-blue-300'
                    }`}>
                  <div className="text-xl mb-1">
                    {cat.icon}
                  </div>
                  {cat.name}
                </div>
              ))}
            </div>

            {/* Amount */}
            <div className="mb-4">
              <label className="text-sm font-semibold
                                text-gray-700 
                                block mb-2">
                Monthly Limit (₹)
              </label>
              <input
                type="number"
                placeholder="e.g. 3000"
                className="w-full border-2 
                           border-gray-200 
                           rounded-xl px-4 py-3
                           text-sm outline-none
                           focus:border-blue-500
                           transition-all"
              />
            </div>

            {/* Month */}
            <div className="mb-6">
              <label className="text-sm font-semibold
                                text-gray-700 
                                block mb-2">
                Month
              </label>
              <input
                type="month"
                defaultValue="2024-11"
                className="w-full border-2 
                           border-gray-200 
                           rounded-xl px-4 py-3
                           text-sm outline-none
                           focus:border-blue-500
                           transition-all"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 bg-gray-100 
                           text-gray-700 py-3 
                           rounded-xl text-sm 
                           font-semibold
                           hover:bg-gray-200
                           transition-all">
                Cancel
              </button>
              <button
                className="flex-[2] bg-blue-600
                           text-white py-3 
                           rounded-xl text-sm
                           font-semibold
                           hover:bg-blue-700
                           transition-all">
                Save Budget 🎯
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}

export default Budget