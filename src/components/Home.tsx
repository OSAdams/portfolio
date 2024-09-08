import SvgLogo from '../assets/whiteosastack.svg';

export default function Home() {
	return (
		<>
			<div className="navbar bg-base-100">
				<div className="flex-none">
					<button className="btn btn-square btn-ghost">
						<img src={SvgLogo} alt="https://www.osastack.dev" />
					</button>
				</div>
				<div className="flex-1">
					<h1 className="btn btn-ghost text-xl">
						Welcome to www.osastack.dev!
					</h1>
				</div>
			</div>
		</>
	);
}
