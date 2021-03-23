



const App = () => {
	return (
		<div className="py-12 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="lg:text-center">
					<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:mx-auto">
						A <span className="text-indigo-600">client-to-client </span>referral program that works
            </p>
					<p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
						With every click or keystroke you run the risk of loosing the attention of your customer.
						Refer-Tech removes the bloat.  We make the referral experience as simple as possible, while
						continuing to <span className="font-semibold">encourage</span>
						, <span className="font-semibold">engage</span> and <span className="font-semibold">reward</span> your customer.
          </p>
				</div>
				<div className="mt-10">
					<dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
						<div className="relative">
							<dt>
								<div className="absolute flex items-center justify-center h-12 w-12 rounded-full bg-indigo-500 text-white">
									1
            </div>
								<p className="ml-16 text-lg leading-6 font-medium text-gray-900">Input Email</p>
							</dt>
							<dd className="mt-2 ml-16 text-base text-gray-500">
								It's all we need to register your Client as a Referal Partner.  Email is already secure.
								No need to create another login... remember another password.  Referal partners can request stats and payments
								directly to their inbox
          </dd>
						</div>
						<div className="relative">
							<dt>
								<div className="absolute flex items-center justify-center h-12 w-12 rounded-full bg-indigo-500 text-white">
									2
            </div>
								<p className="ml-16 text-lg leading-6 font-medium text-gray-900">Send the link</p>
							</dt>
							<dd className="mt-2 ml-16 text-base text-gray-500">
								Every Referal Partner gets a unique URL to send friends.  When someone visits
								that URL the Referal Partner get credit for the lead.  The URL directs leads to your
								online account creation page, or gives them a code they can bring to a local branch. 
					
								
          </dd>
						</div>
						<div className="relative">
							<dt>
								<div className="absolute flex items-center justify-center h-12 w-12 rounded-full bg-indigo-500 text-white">
									3
            </div>
								<p className="ml-16 text-lg leading-6 font-medium text-gray-900">PROFIT</p>
							</dt>
							<dd className="mt-2 ml-16 text-base text-gray-500">
								Once a lead creates a qualifying and seasoned account.  You get a new customer!
								That new customer and the referal partner who send them your way get cash!
          </dd>
						</div>
					</dl>
				</div>
			</div></div>


	)
}
export default App