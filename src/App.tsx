import { useState } from "react";
import "./App.css";
import data from "../src/data.json";
import SelectedTrain from "./CharactekTable";

function App() {
	const [trains, setTrains] = useState(data);
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const [trainSelected, setTrainSelected] = useState<any>(null);

	// const [isActive, setActive] = useState(false);

	const url =
		"https://gist.githubusercontent.com/orlov-oleg-developer/49f08290d1c59a6851e0a0581900e2a7/raw/e5daf87338f3c75165f8edf4c76cc7ec9c2b4aa9/gistfile1.json";

	// 	const myAsync = async (): Promise<Record<string, number | string>> => {
	// 		await angelMowersPromise
	// 		const response = await myPaymentPromise
	// 		return response
	// 	}

	// async function fetchUser() {
	// 	try {
	// 		const response = await fetch(url);

	// 		// const data: SetStateAction<undefined> = await response.json();

	// 		setTrains(data);
	// 		return data;
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// }
	// useEffect(() => {
	// 	void fetchUser();
	// }, []);
	// const check = fetchUser();
	{
		console.log(trainSelected);
	}

	return (
		<>
			<div className="main">
				<table className="table">
					<thead>
						<caption className="caption">Поезда</caption>
					</thead>
					<thead className="title">
						<tr>
							<td>Название</td>
							<td>Описание</td>
						</tr>
					</thead>
					{trains.map((train) => {
						return (
							<tr>
								<td>{train.name}</td>
								<td onClick={() => setTrainSelected(train.characteristics)}>
									{train.description}
								</td>
							</tr>
						);
					})}
				</table>
				{trainSelected && (
					<SelectedTrain character={trainSelected} allTrains={trains} />
					// <table>
					// 	<caption>Характеристики</caption>
					// 	<caption>
					// 		Поезд №
					// 		{trains.findIndex((el) => el.characteristics === trainSelected)}
					// 	</caption>
					// 	{trainSelected.map(
					// 		(trainsel: {
					// 			force: number | null | undefined;
					// 			engineAmperage: number | null | undefined;
					// 			speed: number | null | undefined;
					// 		}) => {
					// 			return (
					// 				<tr>
					// 					<td>{trainsel.speed}</td>
					// 					<td>{trainsel.force}</td>
					// 					<td>{trainsel.engineAmperage}</td>
					// 				</tr>
					// 			);
					// 		}
					// 	)}
					// </table>
				)}
			</div>
		</>
	);
}

export default App;
