
const Footer = () => (
	<footer className="bg-slate-800 text-white">
		<div className="max-w-7xl mx-auto px-4 py-8">
			<div className="grid md:grid-cols-3 gap-8">
				<div>
					<h3 className="text-xl font-serif mb-4">Amy Gajadhar</h3>
					<p className="text-slate-300">Professional piano instruction, accompaniment, and performance services in the Greater Toronto Area.</p>
				</div>
				<div>
					<h4 className="font-semibold mb-4">Services</h4>
					<ul className="space-y-2 text-slate-300">
						<li>Private Piano Lessons</li>
						<li>Music Theory & History</li>
						<li>Piano Accompaniment</li>
						<li>Wedding Performances</li>
					</ul>
				</div>
				<div>
					<h4 className="font-semibold mb-4">Service Area</h4>
					<p className="text-slate-300">Richmond Hill, Vaughan, Markham, and Greater Toronto Area</p>
				</div>
			</div>
			<div className="border-t border-slate-700 mt-8 pt-6 text-center text-slate-400">
				<p>&copy; 2025 Amy Gajadhar Music. All rights reserved.</p>
			</div>
		</div>
	</footer>
);

export default Footer;