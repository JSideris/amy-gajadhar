const Navigation = ({ currentPage, setCurrentPage }: { currentPage: string, setCurrentPage: (page: string) => void }) => (
	<nav className="bg-white shadow-sm sticky top-0 z-50">
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div className="flex justify-between items-center h-20">
				<div className="flex-shrink-0 cursor-pointer" onClick={() => setCurrentPage('home')}>
					<h1 className="text-2xl font-serif text-slate-800">Amy Gajadhar</h1>
					<p className="text-md text-rose-800 font-serif">Performer • Teacher • Musicologist</p>
				</div>
				<div className="hidden md:block">
					<div className="ml-10 flex items-baseline space-x-8">
						{[
							{ id: 'home', label: 'Home' },
							{ id: 'biography', label: 'Biography' },
							{ id: 'studio', label: "Amy's Music Studio" },
							{ id: 'collaborative', label: 'Collaborative Piano' },
							{ id: 'performance', label: 'Performance' },
							{ id: 'contact', label: 'Contact' }
						].map((item) => (
							<button
								key={item.id}
								onClick={() => setCurrentPage(item.id)}
								className={`px-3 py-2 text-sm font-medium transition-colors cursor-pointer ${currentPage === item.id
										? 'text-rose-800 border-b-2 border-rose-600'
										: 'text-slate-700 hover:text-rose-800'
									}`}
							>
								{item.label}
							</button>
						))}
					</div>
				</div>
				<div className="md:hidden">
					<select
						value={currentPage}
						onChange={(e) => setCurrentPage(e.target.value)}
						className="bg-white border border-slate-300 rounded-md px-3 py-2 text-sm"
					>
						<option value="home">Home</option>
						<option value="biography">Biography</option>
						<option value="studio">Amy's Music Studio</option>
						<option value="collaborative">Collaborative Piano</option>
						<option value="performance">Performance</option>
						<option value="contact">Contact</option>
					</select>
				</div>
			</div>
		</div>
	</nav>
);

export default Navigation;