import { Piano, BookOpen, Clock } from "lucide-react";

const StudioPage = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => (
	<div className="bg-white min-h-screen">
		{/* Hero Section */}
		<div className="bg-white py-20">
			<div className="max-w-6xl mx-auto px-6">
				<div className="text-center mb-16">
					<h1 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 mb-4">
						Amy's Music Studio
					</h1>
					<p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
						Comprehensive musical education for students of all ages and levels,
						with personalized instruction and reasonable rates.
					</p>
				</div>
			</div>
		</div>

		{/* Services Grid */}
		<div className="bg-gray-50 py-20">
			<div className="max-w-6xl mx-auto px-6">
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{/* Piano Lessons */}
					<div className="bg-white rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden">
						{/* Piano Image */}
						<div className="w-full h-48 overflow-hidden">
							<img 
								src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
								alt="Piano keys close-up"
								className="w-full h-full object-cover"
							/>
						</div>
						
						<div className="p-8">
							<h2 className="text-2xl font-medium text-rose-500 mb-6 tracking-tight">Piano Lessons</h2>

							<div className="space-y-6">
								<div>
									<h3 className="font-medium text-gray-900 mb-2 text-sm uppercase tracking-wide">Skill Levels</h3>
									<p className="text-gray-600 font-light">Beginner to Advanced</p>
								</div>

								<div>
									<h3 className="font-medium text-gray-900 mb-2 text-sm uppercase tracking-wide">Lesson Options</h3>
									<p className="text-gray-600 font-light">Private lessons in studio or online</p>
								</div>

								<div>
									<h3 className="font-medium text-gray-900 mb-2 text-sm uppercase tracking-wide">Exam Preparation</h3>
									<p className="text-gray-600 font-light">RCM preparation for all levels</p>
								</div>

								<div>
									<h3 className="font-medium text-gray-900 mb-2 text-sm uppercase tracking-wide">Genres Offered</h3>
									<div className="flex flex-wrap gap-2">
										{['Classical', 'Jazz', 'Pop & Rock', 'Ragtime'].map((genre) => (
											<span key={genre} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 border border-gray-200">
												{genre}
											</span>
										))}
									</div>
								</div>

								<div className="bg-rose-50 p-4 rounded-2xl border border-rose-100">
									<p className="text-sm text-rose-900 font-medium">
										Reasonable rates available — Contact for details and scheduling
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Music Theory */}
					<div className="bg-white rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden">
						{/* Music Theory Image */}
						<div className="w-full h-48 overflow-hidden">
							<img 
								src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
								alt="Sheet music and musical notation"
								className="w-full h-full object-cover"
							/>
						</div>
						
						<div className="p-8">
							<h2 className="text-2xl font-medium text-rose-500 mb-6 tracking-tight">Music Theory</h2>

							<div className="space-y-6">
								<div>
									<h3 className="font-medium text-gray-900 mb-2 text-sm uppercase tracking-wide">Curriculum</h3>
									<p className="text-gray-600 font-light">RCM-aligned curriculum for Levels 5-8</p>
								</div>

								<div>
									<h3 className="font-medium text-gray-900 mb-2 text-sm uppercase tracking-wide">Class Format</h3>
									<p className="text-gray-600 font-light">Online and in-person options available</p>
								</div>

								<div>
									<h3 className="font-medium text-gray-900 mb-2 text-sm uppercase tracking-wide">Schedule</h3>
									<p className="text-gray-600 font-light">Same dates as RCM offerings</p>
								</div>

								<div>
									<h3 className="font-medium text-gray-900 mb-2 text-sm uppercase tracking-wide">Class Options</h3>
									<p className="text-gray-600 font-light">Group and individual instruction</p>
								</div>

								<div>
									<h3 className="font-medium text-gray-900 mb-2 text-sm uppercase tracking-wide">Exam Preparation</h3>
									<p className="text-gray-600 font-light">Comprehensive preparation included</p>
								</div>

								<div className="bg-rose-50 p-4 rounded-2xl border border-rose-100">
									<p className="text-sm text-rose-900 font-medium">
										Perfect for students preparing for RCM theory examinations
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Music History */}
					<div className="bg-white rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden">
						{/* Music History Image */}
						<div className="w-full h-48 overflow-hidden">
							<img 
								src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
								alt="Vintage sheet music and classical instruments"
								className="w-full h-full object-cover"
							/>
						</div>
						
						<div className="p-8">
							<h2 className="text-2xl font-medium text-rose-500 mb-6 tracking-tight">Music History</h2>

							<div className="space-y-6">
								<div>
									<h3 className="font-medium text-gray-900 mb-2 text-sm uppercase tracking-wide">Curriculum</h3>
									<p className="text-gray-600 font-light">RCM-aligned curriculum for Levels 5-8</p>
								</div>

								<div>
									<h3 className="font-medium text-gray-900 mb-2 text-sm uppercase tracking-wide">Learning Approach</h3>
									<p className="text-gray-600 font-light">Interactive and engaging methodology</p>
								</div>

								<div>
									<h3 className="font-medium text-gray-900 mb-2 text-sm uppercase tracking-wide">Delivery</h3>
									<p className="text-gray-600 font-light">Online and in-person options</p>
								</div>

								<div>
									<h3 className="font-medium text-gray-900 mb-2 text-sm uppercase tracking-wide">Schedule</h3>
									<p className="text-gray-600 font-light">Same dates as RCM offerings</p>
								</div>

								<div>
									<h3 className="font-medium text-gray-900 mb-2 text-sm uppercase tracking-wide">Coverage</h3>
									<p className="text-gray-600 font-light">Comprehensive historical periods and styles</p>
								</div>

								<div className="bg-rose-50 p-4 rounded-2xl border border-rose-100">
									<p className="text-sm text-rose-900 font-medium">
										Exam preparation and historical context included
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		{/* CTA Section */}
		<div className="bg-white py-20">
			<div className="max-w-4xl mx-auto px-6 text-center">
				<h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
					Ready to begin your musical journey?
				</h2>
				<p className="text-xl text-gray-600 mb-8 font-light">
					Contact Amy for personalized instruction and reasonable rates.
				</p>
				<button
					onClick={() => setCurrentPage('contact')}
					className="cursor-pointer bg-gray-600 hover:bg-gray-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
				>
					Contact Amy for Scheduling and Rates
				</button>
			</div>
		</div>
	</div>
);

export default StudioPage;