import React from "react";

export default function SelectedTrain(character: any, allTrains: any) {
	console.log("chareacter", character);
	return (
		<table>
			<caption>Характеристики</caption>
			<caption>
				Поезд №
				{character.allTrains.findIndex(
					(el: { characteristics: any }) =>
						el.characteristics === character.character
				)}
			</caption>
			{character.character.map(
				(trainsel: {
					force: number | null | undefined;
					engineAmperage: number | null | undefined;
					speed: number | null | undefined;
				}) => {
					return (
						<tr>
							<td>{trainsel.speed}</td>
							<td>{trainsel.force}</td>
							<td>{trainsel.engineAmperage}</td>
						</tr>
					);
				}
			)}
		</table>
	);
}
