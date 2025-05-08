import React, { useContext} from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Data } from "../src/Appcontext";

function WomanSection() {
    const { dispatch, state } = useContext(Data);

    const womanProducts = [
        {
            "id": 1,
            "imageSrc": "https://images.asos-media.com/products/other-stories-crochet-knitted-maxi-dress-in-pink-and-red-twist/208282152-2?$n_480w$&wid=476&fit=constrain",
            "title": "Other Stories crochet knitted maxi dress in pink and red twist",
            "price": "77$",
            "number": 1,
            favorite: false
        },
        {
            "id": 2,
            "imageSrc": "https://images.asos-media.com/products/4th-reckless-poplin-dropped-waist-drape-detail-maxi-dress-in-white/207805496-2?$n_480w$&wid=476&fit=constrain",
            "title": "Other Stories crochet knitted maxi dress in pink and red twist",
            "price": "77$",
            "number": 1,
            favorite: false
        },
        {
            "id": 3,
            "imageSrc": "https://images.asos-media.com/products/other-stories-crochet-knitted-maxi-dress-in-pink-and-red-twist/208282152-2?$n_480w$&wid=476&fit=constrain",
            "title": "Other Stories crochet knitted maxi dress in pink and red twist",
            "price": "77$",
            "number": 1,
            favorite: false
        },
        {
            "id": 4,
            "imageSrc": "https://images.asos-media.com/products/4th-reckless-poplin-dropped-waist-drape-detail-maxi-dress-in-white/207805496-2?$n_480w$&wid=476&fit=constrain",
            "title": "Other Stories crochet knitted maxi dress in pink and red twist",
            "price": "77$",
            "number": 1,
            favorite: false
        },
        {
            "id": 5,
            "imageSrc": "https://images.asos-media.com/products/other-stories-crochet-knitted-maxi-dress-in-pink-and-red-twist/208282152-2?$n_480w$&wid=476&fit=constrain",
            "title": "Other Stories crochet knitted maxi dress in pink and red twist",
            "price": "77$",
            "number": 1,
            favorite: false
        },
        {
            "id": 6,
            "imageSrc": "https://images.asos-media.com/products/4th-reckless-poplin-dropped-waist-drape-detail-maxi-dress-in-white/207805496-2?$n_480w$&wid=476&fit=constrain",
            "title": "Other Stories crochet knitted maxi dress in pink and red twist",
            "price": "77$",
            "number": 1,
            favorite: false
        },
        {
            "id": 7,
            "imageSrc": "https://images.asos-media.com/products/other-stories-crochet-knitted-maxi-dress-in-pink-and-red-twist/208282152-2?$n_480w$&wid=476&fit=constrain",
            "title": "Other Stories crochet knitted maxi dress in pink and red twist",
            "price": "77$",
            "number": 1,
            favorite: false
        },
        {
            "id": 8,
            "imageSrc": "https://images.asos-media.com/products/4th-reckless-poplin-dropped-waist-drape-detail-maxi-dress-in-white/207805496-2?$n_480w$&wid=476&fit=constrain",
            "title": "Other Stories crochet knitted maxi dress in pink and red twist",
            "price": "77$",
            "number": 1,
            favorite: false
        }
    ]
    const Favorite = (id) => {
        return state.favorites.find(item => item.id === id);
    };
    return (
        <div>
            <video autoPlay loop muted className="w-full">
                <source src="https://www.asos-video.com/video/upload/f_auto,q_auto:good/_content_WW_UK_BANK_HOLIDAY_EDIT_HERO_DESK_2880x1280_viwqaj.mp4" />
            </video>

            <div className="flex flex-wrap justify-center gap-4 mt-5 px-4">
                {womanProducts.map(item => (
                    <div key={item.id} className="bg-white w-2/5 lg:w-[23%] p-4 rounded-lg shadow-lg">
                        <img src={item.imageSrc} alt={item.title} className="rounded-md" />
                        <h3 className="mt-3 text-sm lg:text-base font-medium">{item.title}</h3>

                        <div className="flex justify-between items-center mt-2">
                            <span className="font-bold">{item.price}</span>
                            <div
                                onClick={() => dispatch({ type: "AddFavorite", payload: item })} className="cursor-pointer" >
                                {Favorite(item.id)
                                    ? <FavoriteIcon style={{ color: 'red' }} />
                                    : <FavoriteBorderIcon />}
                            </div>
                        </div>

                        <button
                            onClick={() => dispatch({ type: "AddToBag", payload: item })}
                            className="w-full mt-4 h-10 rounded-xl bg-green-500 text-white hover:bg-green-600 text-xs lg:text-base"
                        >
                            Add to bag
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WomanSection;