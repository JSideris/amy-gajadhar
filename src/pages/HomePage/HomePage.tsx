import { Piano, BookOpen, Clock, Users, Music, Calendar } from "lucide-react";

const HomePage = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => (
	<div className="bg-white">
		{/* Hero Section */}
		<div className="relative bg-cover bg-center bg-no-repeat text-white" style={{
			backgroundImage: "url('https://d16gku0mdgm9y9.cloudfront.net/uploads/d8997814-5fb2-491b-b800-dffd2a08e210/compressed/before_event/7M300623.jpeg')"
		}}>
			{/* Dark overlay for better text readability */}
			<div className="absolute inset-0 custom-bg-black"></div>
			
			<div className="relative max-w-6xl mx-auto px-6 py-20 sm:py-28">
				<div className="text-center">
					<h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">
						Excellence in 
						<span className="block font-medium text-rose-400">Musical Education</span>
					</h1>
					<p className="text-xl md:text-2xl text-gray-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed italic">
						Professional piano instruction and elegant performances 
						serving York Region and the GTA.
					</p>
					<button
						onClick={() => setCurrentPage('contact')}
						className="cursor-pointer bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
					>
						Get Started Today
					</button>
				</div>
			</div>
		</div>

		{/* Services Grid */}
		<div className="bg-gray-50 py-20">
			<div className="max-w-6xl mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
						Professional Music Services
					</h2>
					<p className="text-xl text-gray-600 font-light">
						Comprehensive musical education and performance solutions
					</p>
				</div>
				
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{[
						{
							title: 'Piano Lessons',
							description: 'Private instruction for all levels, RCM exam preparation, multiple genres',
							icon: Piano,
							page: 'studio',
						},
						{
							title: 'Music Theory',
							description: 'RCM-aligned curriculum, Levels 5-8, online and in-person options',
							icon: BookOpen,
							page: 'studio',
						},
						{
							title: 'Music History',
							description: 'Comprehensive historical knowledge, exam preparation included',
							icon: Clock,
							page: 'studio',
						},
						{
							title: 'Piano Accompaniment',
							description: 'Professional accompanying for exams, festivals, concerts, and recitals',
							icon: Users,
							page: 'collaborative',
						},
						{
							title: 'Wedding Performances',
							description: 'Elegant ceremony and cocktail hour music for your special day',
							icon: Music,
							page: 'performance',
						},
						{
							title: 'Special Events',
							description: 'Custom musical experiences for corporate events and celebrations',
							icon: Calendar,
							page: 'performance',
						}
					].map((service, index) => (
						<div
							key={index}
							className="bg-white rounded-2xl p-8 cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
							onClick={() => setCurrentPage(service.page)}
						>
							<div className="bg-gray-100 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
								<service.icon size={28} className="text-gray-700" />
							</div>
							<h3 className="text-2xl font-medium text-rose-500 mb-3 tracking-tight">
								{service.title}
							</h3>
							<p className="text-gray-600 leading-relaxed font-light">
								{service.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>

		{/* Stats Section */}
		<div className="bg-white py-20">
			<div className="max-w-6xl mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
						Proven Excellence
					</h2>
					<p className="text-xl text-gray-600 font-light">
						Building musical futures, one student at a time
					</p>
				</div>
				
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{[
						{ number: '20+', label: 'Years Teaching' },
						{ number: '200+', label: 'Students Taught' },
						{ number: '50+', label: 'Performances' },
						{ number: 'All', label: 'RCM Levels' }
					].map((stat, index) => (
						<div key={index} className="text-center">
							<div className="text-5xl md:text-6xl font-bold text-rose-400 mb-2 tracking-tight">
								{stat.number}
							</div>
							<div className="text-lg text-gray-600 font-light">
								{stat.label}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>

		{/* Call to Action */}
		<div className="bg-gray-50 py-20">
			<div className="max-w-4xl mx-auto px-6 text-center">
				<h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
					Ready to begin your musical journey?
				</h2>
				<p className="text-xl text-gray-600 mb-8 font-light">
					Unlock your musical potential with expert, one-on-one instruction.
				</p>
				<button
					onClick={() => setCurrentPage('contact')}
					className="cursor-pointer bg-gray-600 hover:bg-gray-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
				>
					Start Your Journey
				</button>
			</div>
		</div>
	</div>
);

export default HomePage;