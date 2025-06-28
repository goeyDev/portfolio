import React from 'react'

const Newsletter = () => {
  return (
         <section className="py-20 bg-white dark:bg-dark/50 rounded-lg shadow-md overflow-hidden animate-slideUp">
            <div className="p-8 md:p-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="">
                        <h2 className="text-2xl font-bold mb-4">Subscribe to my Newsletters</h2>
                        <p className="text-gray-600 dark:text-gray-300 md:w-2/3">Get the latest updates on my projects,blogs posts, and insights delivered straight to your inbox.</p>
                    </div>
                    <form className="flex flex-col md:flex-row gap-4">
                        <input type="email" placeholder="Enter Email..."
                        className="flex-1 px-4 py-3 border rounded-lg dark:text-white border-gray-300 dark:border-gray-600 bg-white text-gray-500 dark:bg-dark focus:outline-none focus:ring-1 focus:ring-primary" />
                         <button type="submit" className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/80 transition-colors duration-500">Subscribe</button>
                    </form>

                    </div>
                    
                </div>
            </div>
         </section>
  )
}

export default Newsletter