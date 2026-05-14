import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } 
from 'recharts'

const Dashboard = () => {

  const pieData = [
    { name: 'Food', value: 29, color: '#2563EB' },
    { name: 'Shopping', value: 24, color: '#7C3AED' },
    { name: 'Transport', value: 11, color: '#10B981' },
    { name: 'Entertainment', value: 10, color: '#F59E0B' },
    { name: 'Health', value: 6, color: '#EF4444' },
    { name: 'Others', value: 20, color: '#6B7280' },
  ]


  const barData = [
    { month: 'Jun', spent: 22000, saved: 18000 },
    { month: 'Jul', spent: 25000, saved: 15000 },
    { month: 'Aug', spent: 19000, saved: 21000 },
    { month: 'Sep', spent: 28000, saved: 12000 },
    { month: 'Oct', spent: 24000, saved: 16000 },
    { month: 'Nov', spent: 28450, saved: 16550 },
  ]

  const transactions = [
    { icon: '🍕', name: 'Swiggy Order', 
      date: 'Today, 1:30 PM', 
      category: 'Food',
      categoryColor: '#FEF3C7',
      categoryText: '#D97706',
      amount: '-₹450', type: 'debit' },
    { icon: '🛍️', name: 'Amazon Purchase',
      date: 'Yesterday, 4:20 PM',
      category: 'Shopping',
      categoryColor: '#EDE9FE',
      categoryText: '#7C3AED',
      amount: '-₹1,299', type: 'debit' },
    { icon: '💰', name: 'Salary Credit',
      date: '01 Nov, 9:00 AM',
      category: 'Income',
      categoryColor: '#DCFCE7',
      categoryText: '#16A34A',
      amount: '+₹45,000', type: 'credit' },
    { icon: '🎬', name: 'Netflix',
      date: '28 Oct, 11:00 AM',
      category: 'Entertainment',
      categoryColor: '#FEE2E2',
      categoryText: '#DC2626',
      amount: '-₹499', type: 'debit' },
    { icon: '🚗', name: 'Uber Trip',
      date: '27 Oct, 8:45 AM',
      category: 'Transport',
      categoryColor: '#DBEAFE',
      categoryText: '#2563EB',
      amount: '-₹280', type: 'debit' },
  ]

  return (
    <div className="bg-gray-50 min-h-screen">

      <nav className="bg-white px-10 py-3 
                      flex items-center justify-between shadow-sm sticky top-0 z-50">
        <h1 className="text-blue-600 text-xl font-bold">
          Trackfi.ai
        </h1>
        <ul className="flex gap-8 list-none">
          <li>
            <a href="/dashboard" 
               className="text-blue-600 text-sm font-semibold">
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
               className="text-gray-500 text-sm">
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

        <div className="flex items-center gap-3">
          <button className="bg-blue-600 text-white 
                             px-4 py-2 rounded-lg  text-sm font-semibold">
            + Upload PDF
          </button>
          <div className="w-8 h-8 bg-blue-600 
                          rounded-full flex items-center justify-centertext-white font-bold text-sm">
            S
          </div>
        </div>
      </nav>

     
      <div className="max-w-6xl mx-auto py-8 px-6">

        <div className="flex items-center justify-between mb-7">
          <div>
            <h1 className="font-playfair text-2xl font-bold text-gray-900">
              Good Morning, Suvani! 👋
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Here's your financial summary 
              for November 2024
            </p>
          </div>
          <button className="flex items-center gap-2 
                 bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-600 font-medium">
            📅 November 2024 ▾
          </button>
        </div>

        <div className="grid grid-cols-4  gap-4 mb-6">

          <div className="bg-white rounded-2xl 
                          p-5 shadow-sm 
                          border-t-4 border-blue-500">
            <div className="w-10 h-10 bg-blue-50 
                            rounded-xl flex 
                            items-center justify-center 
                            text-lg mb-3">
              💰
            </div>
            <p className="text-xs text-gray-400 
                          uppercase tracking-wide mb-1">
              Total Spent
            </p>
            <p className="text-2xl font-bold 
                          text-gray-900 mb-1">
              ₹28,450
            </p>
            <p className="text-xs text-red-500 
                          font-medium">
              ↑ 12% from last month
            </p>
          </div>

          <div className="bg-white rounded-2xl 
                          p-5 shadow-sm 
                          border-t-4 border-green-500">
            <div className="w-10 h-10 bg-green-50 
                            rounded-xl flex 
                            items-center justify-center 
                            text-lg mb-3">
              🏦
            </div>
            <p className="text-xs text-gray-400 
                          uppercase tracking-wide mb-1">
              Total Saved
            </p>
            <p className="text-2xl font-bold 
                          text-gray-900 mb-1">
              ₹16,550
            </p>
            <p className="text-xs text-green-500 
                          font-medium">
              ↑ 8% from last month
            </p>
          </div>

          <div className="bg-white rounded-2xl 
                          p-5 shadow-sm  border-t-4 border-yellow-500">
            <div className="w-10 h-10 bg-yellow-50 
               rounded-xl flex items-center justify-center text-lg mb-3">
              📋
            </div>
            <p className="text-xs text-gray-400 
                 uppercase tracking-wide mb-1">
              Transactions
            </p>
            <p className="text-2xl font-bold text-gray-900 mb-1">
              124
            </p>
            <p className="text-xs text-gray-400 font-medium">
              This month
            </p>
          </div>

          <div className="bg-white rounded-2xl 
                          p-5 shadow-sm 
                          border-t-4 border-red-500">
            <div className="w-10 h-10 bg-red-50 
                rounded-xl flex items-center justify-center text-lg mb-3">
              🔥
            </div>
            <p className="text-xs text-gray-400 
               uppercase tracking-wide mb-1">
              Daily Burn
            </p>
            <p className="text-2xl font-bold 
               text-gray-900 mb-1">
              ₹948
            </p>
            <p className="text-xs text-red-500 
               font-medium">
              Per day average
            </p>
          </div>

        </div>

        <div className="grid grid-cols-5 
              gap-4 mb-6">

          <div className="col-span-2 bg-white 
                rounded-2xl p-6 shadow-sm">
            <h3 className="text-sm font-semibold 
                   text-gray-900 mb-1">
              Spending by Category
            </h3>
            <p className="text-xs text-gray-400 mb-4">
              November 2024
            </p>

            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={85}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={index} 
                          fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => value + '%'} 
                />
              </PieChart>
            </ResponsiveContainer>

           
            <div className="mt-3 space-y-2">
              {pieData.slice(0,4).map((item, i) => (
                <div key={i} 
                     className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full"
                       style={{background: item.color}}>
                  </div>
                  <span className="text-xs 
                       text-gray-600 flex-1">
                    {item.name}
                  </span>
                  <span className="text-xs 
                        font-semibold text-gray-800">
                    {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>


          <div className="col-span-3 bg-white 
                          rounded-2xl p-6 shadow-sm">
            <h3 className="text-sm font-semibold 
                           text-gray-900 mb-1">
              Monthly Spending Trend
            </h3>
            <p className="text-xs text-gray-400 mb-4">
              Last 6 months
            </p>

            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={barData} 
                        barCategoryGap="30%">
                <CartesianGrid strokeDasharray="3 3" 
                               stroke="#F3F4F6" 
                               vertical={false} />
                <XAxis dataKey="month" 
                       tick={{fontSize: 12}} 
                       axisLine={false}
                       tickLine={false} />
                <YAxis 
                  tick={{fontSize: 11}}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v) => 
                    '₹' + v/1000 + 'k'} 
                />
               <Tooltip
  contentStyle={{
    backgroundColor: '#1F2937',
    border: 'none',
    borderRadius: '12px',
    color: 'white',
    fontSize: '13px',
    padding: '10px 14px'
  }}
  formatter={(value, name) => [
    '₹' + value.toLocaleString(), 
    name
  ]}
  cursor={{fill: 'rgba(37,99,235,0.1)'}}
/>
                <Legend />
                <Bar dataKey="spent" 
                     name="Spent"
                     fill="#2563EB" 
                     radius={[6,6,0,0]} />
                <Bar dataKey="saved" 
                     name="Saved"
                     fill="#BFDBFE" 
                     radius={[6,6,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

        </div>

        <div className="grid grid-cols-5 gap-4">

          <div className="col-span-3 bg-white 
                          rounded-2xl p-6 shadow-sm">
            <div className="flex items-center 
                            justify-between mb-5">
              <h3 className="text-sm font-semibold 
                             text-gray-900">
                Recent Transactions
              </h3>
              <a href="#" 
                 className="text-blue-500 text-xs 
                            font-medium">
                View all →
              </a>
            </div>

            {transactions.map((t, i) => (
              <div key={i} 
                   className="flex items-center 
                              gap-3 py-3 
                              border-b border-gray-50 
                              last:border-0">
                <div className="w-9 h-9 rounded-xl 
                                flex items-center 
                                justify-center text-base"
                     style={{
                       background: t.categoryColor
                     }}>
                  {t.icon}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium 
                                text-gray-800">
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-400">
                    {t.date}
                  </p>
                </div>
                <span className="text-xs px-2 py-1 
                                 rounded-full font-medium"
                      style={{
                        background: t.categoryColor,
                        color: t.categoryText
                      }}>
                  {t.category}
                </span>
                <p className={`text-sm font-semibold 
                  ${t.type === 'credit' ? 
                    'text-green-500' : 
                    'text-red-500'}`}>
                  {t.amount}
                </p>
              </div>
            ))}
          </div>

   
          <div className="col-span-2 flex 
                          flex-col gap-4">

            <div className="bg-white rounded-2xl 
                            p-6 shadow-sm">
              <h3 className="text-sm font-semibold 
                             text-gray-900 mb-4">
                💡 AI Insights
              </h3>

              <div className="border-l-4 border-yellow-400 
                              bg-yellow-50 rounded-r-xl 
                              p-3 mb-3">
                <p className="text-xs font-semibold 
                              text-yellow-800 mb-1">
                  ⚠️ Food Spending High
                </p>
                <p className="text-xs text-yellow-700">
                  You spent ₹8,200 on food — 
                  40% more than last month!
                </p>
              </div>

              <div className="border-l-4 border-green-400 
                              bg-green-50 rounded-r-xl 
                              p-3 mb-3">
                <p className="text-xs font-semibold 
                              text-green-800 mb-1">
                  ✅ Great Savings!
                </p>
                <p className="text-xs text-green-700">
                  You saved ₹16,550 — 
                  37% of your income!
                </p>
              </div>

              <div className="border-l-4 border-red-400 
                              bg-red-50 rounded-r-xl p-3">
                <p className="text-xs font-semibold 
                              text-red-800 mb-1">
                  🔴 Shopping Alert
                </p>
                <p className="text-xs text-red-700">
                  Shopping budget exceeded 
                  by ₹1,800!
                </p>
              </div>
            </div>

           
            <div className="bg-gradient-to-br 
                            from-blue-700 to-blue-500 
                            rounded-2xl p-5 text-white">
              <p className="text-xs opacity-75 mb-2">
                🔥 Burn Rate Predictor
              </p>
              <p className="text-3xl font-bold mb-1">
                17 days left
              </p>
              <p className="text-xs opacity-70 mb-3">
                Money runs out by → 17 Dec 2024
              </p>
              <div className="bg-white/20 
                              rounded-full h-1.5">
                <div className="bg-white rounded-full 
                                h-1.5 w-3/5">
                </div>
              </div>
              <p className="text-xs opacity-60 mt-2">
                ₹948/day average spend
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard