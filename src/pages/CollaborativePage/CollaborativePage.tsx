import { Award, Calendar, Music, Star, Users } from "lucide-react";

const CollaborativePage = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => (
	<div className="bg-white">
		{/* Hero Section */}
		<div className="bg-white pt-20 pb-20 px-6">
			<div className="text-center mb-16">
				<h1 className="text-5xl font-light text-gray-900 mb-6 tracking-tight">
					Collaborative Piano
				</h1>
				<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
					Professional piano accompanying services for musicians at all levels,
					from student examinations to professional concerts.
				</p>
			</div>
		</div>

		{/* Main Content */}
		<div className="bg-gray-50 py-20">
			<div className="max-w-6xl mx-auto px-6">
				<div className="grid lg:grid-cols-2 gap-8 mb-16">
					<div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-100 p-10 hover:shadow-2xl transition-all duration-300">
						<h2 className="text-3xl font-light text-gray-900 mb-8 tracking-tight">Services</h2>
						<div className="space-y-8">
							{[
								{
									title: 'Exam Accompaniment',
									description: 'RCM, university, and conservatory examinations',
									icon: Award
								},
								{
									title: 'Festival Performances',
									description: 'Music festivals and competition support',
									icon: Star
								},
								{
									title: 'Concert Collaborations',
									description: 'Professional and amateur concert performances',
									icon: Music
								},
								{
									title: 'Recital Support',
									description: 'Student and professional recital accompaniment',
									icon: Users
								},
								{
									title: 'Audition Preparation',
									description: 'University and professional audition coaching',
									icon: Calendar
								}
							].map((service, index) => (
								<div key={index} className="flex items-start space-x-5 group">
									<div className="bg-gradient-to-br from-rose-500 to-rose-600 p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-200">
										<service.icon className="text-white" size={20} />
									</div>
									<div className="flex-1">
										<h3 className="font-medium text-gray-900 text-lg mb-1">{service.title}</h3>
										<p className="text-gray-600 font-light leading-relaxed">{service.description}</p>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-100 p-10 hover:shadow-2xl transition-all duration-300">
						<h2 className="text-3xl font-light text-gray-900 mb-8 tracking-tight">Expertise</h2>
						<div className="space-y-6">
							<div>
								<h3 className="font-medium text-gray-900 text-lg mb-3">Repertoire Knowledge</h3>
								<p className="text-gray-600 font-light leading-relaxed">
									Extensive knowledge of standard vocal, instrumental, and chamber music repertoire
									from Baroque to contemporary periods.
								</p>
							</div>

							<div>
								<h3 className="font-medium text-gray-900 text-lg mb-3">Collaborative Skills</h3>
								<p className="text-gray-600 font-light leading-relaxed">
									Experienced in supporting both emerging and established artists, with sensitivity
									to musical interpretation and ensemble balance.
								</p>
							</div>

							<div>
								<h3 className="font-medium text-gray-900 text-lg mb-3">Professional Approach</h3>
								<p className="text-gray-600 font-light leading-relaxed">
									Reliable, punctual, and well-prepared for all engagements, with flexible
									scheduling to accommodate performer needs.
								</p>
							</div>

							<div className="bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-100 p-6 rounded-2xl mt-8">
								<h3 className="font-medium text-rose-900 text-lg mb-3">Booking Process</h3>
								<p className="text-rose-700 font-light leading-relaxed">
									Contact Amy with your performance details, including date, repertoire,
									and rehearsal requirements. Advance booking recommended for optimal preparation.
								</p>
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
					Ready to Collaborate?
				</h2>
				<p className="text-xl text-gray-600 mb-8 font-light">
					Whether you're preparing for an important exam, planning a recital, or organizing a professional concert,
					Amy provides the expertise and artistry to elevate your performance.
				</p>
				<button
					onClick={() => setCurrentPage('contact')}
					className="cursor-pointer bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
				>
					Contact for Availability and Rates
				</button>
			</div>
		</div>
	</div>
);

export default CollaborativePage;