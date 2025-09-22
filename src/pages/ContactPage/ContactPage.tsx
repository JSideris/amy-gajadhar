import { Clock, MapPin } from "lucide-react";

const ContactPage = () => {
	return (
		<div className="bg-gradient-to-br from-gray-50 to-white min-h-screen">
			{/* Hero Section */}
			<div className="relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30"></div>
				<div className="relative max-w-6xl mx-auto px-6 pt-20 pb-16">
					<div className="text-center">
						<h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
							Contact Amy
						</h1>
						<p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
							Ready to begin your musical journey or book professional services?
							<br />
							<span className="text-gray-500">Amy responds to all inquiries within 48 hours.</span>
						</p>
					</div>
				</div>
			</div>

			<div className="max-w-7xl mx-auto px-6 pb-20">
				<div className="grid lg:grid-cols-3 gap-8">
					{/* Google Form Section */}
					<div className="lg:col-span-2">
						<div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
							<div className="p-8 border-b border-gray-100">
								<h2 className="text-2xl font-light text-gray-900 mb-2">Get in Touch</h2>
								<p className="text-gray-600">Fill out the form below and Amy will respond within 24 hours.</p>
							</div>
							<div className="flex justify-center p-4">
								<iframe 
									src="https://docs.google.com/forms/d/e/1FAIpQLSclp9pNSBL8Xe01AMLBethGBGZ4hf-j7peQyumWOfXWGPkLRA/viewform?embedded=true" 
									width="100%" 
									height="1221" 
									// frameBorder="0" 
									// marginHeight="0" 
									// marginWidth="0"
									className="rounded-2xl"
									style={{ maxWidth: '640px' }}
								>
									Loading…
								</iframe>
							</div>
						</div>
					</div>

					{/* Info Cards */}
					<div className="space-y-6">

						{/* Initial Consultations Card */}
						<div className="bg-white rounded-3xl border border-gray-200 p-8">
							<h3 className="text-xl font-medium text-rose-500 mb-4">Initial Consultations</h3>
							<p className="text-gray-700 mb-4 leading-relaxed">
								Amy offers brief initial consultations to discuss your musical goals,
								assess current skill level, and determine the best approach for your needs.
							</p>
							<p className="text-gray-600 text-sm leading-relaxed">
								For piano lessons, this includes a brief evaluation and discussion of
								learning objectives. For performance services, we'll review your event
								details and musical preferences.
							</p>
						</div>

						{/* Why Choose Amy Card */}
						<div className="bg-slate-800 text-white rounded-3xl p-8">
							<h3 className="text-xl font-medium mb-6">Why Choose Amy?</h3>
							<div className="space-y-4">
								{[
									"Advanced degrees and professional training",
									"20+ years of teaching and performing experience", 
									"Specializes in multiple musical genres and styles",
									"Flexible scheduling and reasonable rates",
									"Committed to each student's individual success"
								].map((item, index) => (
									<div key={index} className="flex items-start space-x-3">
										<div className="w-1.5 h-1.5 bg-rose-500 rounded-full mt-2.5 flex-shrink-0"></div>
										<span className="text-gray-300 leading-relaxed">{item}</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;