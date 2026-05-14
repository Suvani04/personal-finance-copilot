import {PieChart,Pie,Cell, BarChart,Bar, XAxis ,YAxis, CartesianGrid,Tooltip,Legend,ResponsiveContainer} from 'recharts'

const Dashboard =() =>{
  const pieData =[
    {name:'Food', value:29,color:'#2563EB' },
    {name:'Shopping', value:24,color:'#7C3AED' },
    {name:'Transport', value:11,color:'#10B981' },
    {name:'Entertaiment', value:10,color:'#F59E0B' },
    {name:'Health', value:6,color:'#EF4444' },
    {name:'other', value:20,color:'#6B7280' },
  ]
  const barData =[
    {month:'jun', spent: 22000, saved: 18000},
    {month:'jul', spent: 25000 , saved: 15000 },
    {month:'aug', spent: 19000, saved: 21000},
    {month:'sep', spent: 28000, saved: 12000},
    {month:'oct', spent: 24000, saved: 16000},
    {month:'nov', spent: 28450, saved: 16500},
  ]

  const transactions= [
    {icon:'🍕' ,name:'Swiggy Order',
      date:'Today, 1:30 PM',
      category: 'Food',
      categoryColor: '#FEF3C7',
      categoryText: '#D97706',
      amount:'-450',type:'debit'
    },
    {icon: '🛍️', name: 'Amazon Purchase',
      date: 'Yesterday, 4:20 PM',
      category: 'Shopping',
      categoryColor: '#EDE9FE',
      categoryText: '#7C3AED',
      amount: '-₹1,299', type: 'debit'
    },
    { icon: '💰', name: 'Salary Credit',
      date: '01 Nov, 9:00 AM',
      category: 'Income',
      categoryColor: '#DCFCE7',
      categoryText: '#16A34A',
      amount: '+₹45,000', type: 'credit' 
    },
    { icon: '🎬', name: 'Netflix',
      date: '28 Oct, 11:00 AM',
      category: 'Entertainment',
      categoryColor: '#FEE2E2',
      categoryText: '#DC2626',
      amount: '-₹499', type: 'debit'
    },
    { icon: '🚗', name: 'Uber Trip',
      date: '27 Oct, 8:45 AM',
      category: 'Transport',
      categoryColor: '#DBEAFE',
      categoryText: '#2563EB',
      amount: '-₹280', type: 'debit'
    },
  ]
  return(
    <div className="bg-gray-100 min-h-screen" >
      <nav className="bg-white px-10 py-3 flex
       items-center justify-between shadow-sm sticky top-0 z-50">
        <h1 className=" font-bold text-xl text-blue-600">Trackfi.ai</h1>
        <ul className="flex gap-8 list-none">
          <li>
            <a href="/dashboard" className="text-blue-600 font-semibold text-sm"> 📊 Dashboard</a>
          </li>
          <li>
            <a href="/upload" className="text-gray-500 text-sm">📄 Upload</a>
          </li>
          <li>
            <a href="/upload" className="text-gray-500 text-sm">🎯 Budget</a>
          </li>
          <li>
            <a href="/upload" className="text-gray-500 text-sm">💡 Insights</a>
          </li>
        </ul>
       <div className="flex items-center gap-3">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
          + Upload PDF
        </button>

        <button>
          <div className="w-8 h-8  bg-blue-600 rounded-full 
        flex items-center justify-center text-white font-semibold text-sm">
          S
        </div>
        </button>
       </div>
      </nav>

      <div className="max-w-6xl mx-auto py-8 px-6">
        <div className=" flex items-center justify-between mb-7">
          <div>
            <h1 className="font-bold font-playfair text-2xl text-gray-900">
              Good Morning, Suvani!
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Here's your financial summary for November 2025</p>
          </div>
          <button className="flex items-center gap-2 bg-white border border-gray-200 
          rounded-xl px-4 py-2 text-sm text-gray-600 font-medium">
            📅 November 2024 ▾
          </button>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className=" bg-white rounded-2xl p-5 shadow-sm border-t-4 border-blue-500">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-lg mb-3">
                     💰
            </div>
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
              Total Spent
            </p>
            <p className="text-2xl font-bold text-gray-900 mb-1"> 
              ₹28,450
            </p>
            <p className="text-xs text-red-500 font-medium"> 
              ↑ 12% from last month
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm border-t-4 border-green-500">
            <div className="w-10 h-10 bg-green-50 
                            rounded-xl flex items-center justify-center text-lg mb-3">
                🏦
            </div>
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
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

          <div className="bg-white rounded-2xl p-5 shadow-sm border-t-4 border-yellow-500">
            <div className="w-10 h-10 bg-yellow-50 
                rounded-xl flex  items-center justify-center text-lg mb-3">
              📋
            </div>
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
              Transactions
            </p>
            <p className="text-2xl font-bold text-gray-900 mb-1">
              124
            </p>
            <p className="text-xs text-green-500 font-medium">
              This month
            </p>
          </div>

          <div className="bg-white rounded-2xl 
              p-5 shadow-sm border-t-4 border-red-500">
            <div className="w-10 h-10 bg-red-50 
                rounded-xl flex items-center justify-center text-lg mb-3">
              🔥
            </div>
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
              Daily Burn
            </p>
            <p className="text-2xl font-bold text-gray-900 mb-1">
              ₹948
            </p>
            <p className="text-xs text-red-500 font-medium">
              Per day average
            </p>
          </div>

        </div>

        <div className="grid grid-cols-5 gap-4 mb-6">
          <div className="col-span-2 bg-white rounded-2xl p-6 shadow-sm min-h-[400px]">
            <h3 className="text-sm font-semibold text-gray-900 mb-1s">
              Spending by Category
            </h3>
            <p className="text-gray-400 text-xs mb-4">
              November 2025
            </p>
            <ResponsiveContainer width="100%" height={250}>

              <PieChart>
                <Pie             
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={3}
                  dataKey="value"
                  >{pieData.map((entry, index)=>(
                  <Cell key={index} fill={entry.color}/>
                ))}</Pie>
                <Tooltip formatter={(value)=> value+ '%'}/>
              </PieChart>
            </ResponsiveContainer>

            <div className="mt-3 space-y-2">
              {pieData.slice(0,4).map((item,i)=>(
                <div key={i} 
                  className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full"
                   style={{background: item.color}}>
                  </div>    

                  <span className="text-xs text-gray-600 flex-1">
                    {item.name}
                  </span>
                    <span className="text-xs font-semibold text-gray-800">
                    {item.value}%
                  </span>
              </div>  
              ))}
            </div>

          </div>
          <div className='col-span-3 bg-white rounded-2xl p-6-shadow-sm'>
          <h1 className='text-sm font-semibold text-gray-900 ml-2 mt-1 mb-1'>Monthly Spending Trend</h1>
          <p className="text-xs text-gray-400 ml-2 mb-4">
              Last 6 months comaprison
          </p>

          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={barData}
            barCategoryGap="30%">
              <CartesianGrid strokeDasharray="3 3"
              stroke="#F3F4F6" vertical={false}/>
              <XAxis dataKey="month" 
                       tick={{fontSize: 12}} 
                       axisLine={false} tickLine={false} />
                <YAxis 
                  tick={{fontSize: 11}}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v) => 
                  '₹' + v/1000 + 'k'} /> 
                  
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
                {/* <Tooltip 
                  formatter={(v) => 
                    '₹' + v.toLocaleString()} 
                />         */}
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
      </div>
      
    </div>
  )
}
export default Dashboard