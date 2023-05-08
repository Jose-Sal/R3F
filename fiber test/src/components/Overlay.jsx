import { Scroll } from "@react-three/drei"
export const Overlay=()=>{
    return (
    <Scroll html >
        <header>
    <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="people.html">Characters</a></li>
        <li><a href="planets.html">Planets</a></li>
        <li><a href="films.html">Films</a></li>
        <li><a href="starships.html">Starships</a></li>
      </ul>
    </nav>
  </header>
    </Scroll>
    );
};



// const Section = (props)=>{
//     return(
//         <section className="h-screen flex flex-col justify-center p-10">
//         <div className="w-1/2 flex item-center justify-center">
//             <div className="max-w-sm w-full">
//                 <div className="bg-white rounded-lg px-8 py-12">
//                     {props.children}
//                 </div>
//             </div>
//         </div>
//     </section>
//     );
// }
