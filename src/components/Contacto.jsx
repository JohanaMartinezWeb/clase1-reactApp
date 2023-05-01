export default function Contacto(){

	const datos = [
		{name: "Johana", id:1},
		{name: "Anderson", id:2},
		{name:"Katherine", id:3},
		{name:"Martinez", id:4}
	]


	return(
		<div>
			 <h1>Contacto</h1>
			 <p>Este es el primer componente de practica</p>
		<ul style={{listStyle: "none"}}>
			{
				  datos.map((el)=>(
						<li key={el.id}>{el.name}</li>
					)) 
			}
		</ul>
		</div>
	)
}