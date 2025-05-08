import React, { useContext } from "react";
import { Data } from "../src/Appcontext";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
function Favorite() {
    const { state, dispatch } = useContext(Data);
    const favorites = state.favorites;
    const Favorite = (id) => {
        return state.favorites.find(item => item.id === id);
    };

    return (
        <div className="flex flex-col justify-start items-center h-screen w-full">
            <h2 className="text-3xl font-medium mt-10 mb-3">Add your favorite items</h2>
            <div className="w-[80%]  overflow-y-scroll flex flex-wrap  justify-evenly border-2 rounded-2xl ">
                {favorites.map(item => (
                    <div key={item.id} className="bg-white w-2/5 lg:w-[23%] p-4 rounded-lg shadow-lg">
                        <img src={item.imageSrc} alt={item.title} className="rounded-md" />
                        <h3 className="mt-3 text-sm lg:text-base font-medium">{item.title}</h3>
                        <div className="flex flex-row-reverse justify-between items-center mt-2" >
                            <div 
                                onClick={() => dispatch({ type: "AddFavorite", payload: item })} className="cursor-pointer ml-1 mt-4" >
                                {Favorite(item.id)
                                    ? <FavoriteIcon style={{ color: 'red' }} />
                                    : <FavoriteBorderIcon />}
                            </div>
                            <button
                                onClick={() => dispatch({ type: "AddToBag", payload: item })}
                                className="w-full mt-4 h-10 rounded-xl bg-green-500 text-white hover:bg-green-600 text-xs lg:text-base"
                            >
                                Add to bag
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Favorite;

