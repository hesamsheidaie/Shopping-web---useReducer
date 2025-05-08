import React, { useContext} from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Data } from "../src/Appcontext";

function ManSection() {
    const { dispatch, state } = useContext(Data);


    const Favorite = (id) => {
        return state.favorites.find(item => item.id === id);
    };
    const manProducts=[
        {
            "id": 1,
            "imageSrc":
                "https://images.asos-media.com/products/asos-design-oversized-t-shirt-with-text-graphic-in-charcoal/207906015-2?$n_480w$&wid=476&fit=constrain",
            "title": "Superdry Embroidered vacation linen shirt in optic",
            "price": "100$",
            number: 1,
            favorite: false
        },
        {
            "id": 2,
            "imageSrc":
                "https://images.asos-media.com/products/jack-jones-premium-crochet-knitted-polo-shirt-in-white/207768081-2?$n_480w$&wid=476&fit=constrain",
            "title": "Superdry Embroidered vacation linen shirt in optic ",
            "price": "77$",
            number: 1,
            favorite: false
        },
        {
            "id": 3,
            "imageSrc":
                "https://images.asos-media.com/products/jack-jones-premium-crochet-knitted-polo-shirt-in-white/207768081-2?$n_480w$&wid=476&fit=constrain",
            "title": "Superdry Embroidered vacation linen shirt in optic  ",
            "price": "90$",
            number: 1,
            favorite: false
        },
        {
            "id": 4,
            "imageSrc":
                "https://images.asos-media.com/products/asos-design-oversized-t-shirt-with-text-graphic-in-charcoal/207906015-2?$n_480w$&wid=476&fit=constrain",
            "title": "Superdry Embroidered vacation linen shirt in optic",
            "price": "57$",
            number: 1,
            favorite: false
        },
        {
            "id": 5,
            "imageSrc":
                "https://images.asos-media.com/products/asos-design-oversized-t-shirt-with-text-graphic-in-charcoal/207906015-2?$n_480w$&wid=476&fit=constrain",
            "title": "Superdry Embroidered vacation linen shirt in optic",
            "price": "57$",
            number: 1,
            favorite: false
        },
        {
            "id": 6,
            "imageSrc":
                "https://images.asos-media.com/products/jack-jones-premium-crochet-knitted-polo-shirt-in-white/207768081-2?$n_480w$&wid=476&fit=constrain",
            "title": "Superdry Embroidered vacation linen shirt in optic ",
            "price": "77$",
            number: 1,
            favorite: false
        },
        {
            "id": 7,
            "imageSrc":
                "https://images.asos-media.com/products/jack-jones-premium-crochet-knitted-polo-shirt-in-white/207768081-2?$n_480w$&wid=476&fit=constrain",
            "title": "Superdry Embroidered vacation linen shirt in optic ",
            "price": "77$",
            number: 1,
            favorite: false
        },
        {
            "id": 8,
            "imageSrc":
                "https://images.asos-media.com/products/asos-design-oversized-t-shirt-with-text-graphic-in-charcoal/207906015-2?$n_480w$&wid=476&fit=constrain",
            "title": "Superdry Embroidered vacation linen shirt in optic",
            "price": "100$",
            number: 1,
            favorite: false
        },
    ]
    

    return (
        <div>
            <video autoPlay loop muted className="w-full h-auto">
                <source src="https://www.asos-video.com/video/upload/f_auto,q_auto:good/_content_MW_UK_BANK_HOLIDAY_EDIT_HERO_DESK_2880x1280_yaofrh.mp4" />
            </video>

            <div className="flex flex-wrap justify-center gap-4 mt-5 px-4">
                {manProducts.map(item => (
                    <div key={item.id} className="bg-white w-2/5 lg:w-[23%] p-4 rounded-lg shadow-lg">
                        <img src={item.imageSrc} alt={item.title} className="rounded-md" />
                        <h3 className="mt-3 text-sm lg:text-base font-medium">{item.title}</h3>
                        <div className="flex justify-between items-center mt-2">
                            <span className="font-bold">{item.price}</span>
                            <div
                                onClick={() => dispatch({ type: "AddFavorite", payload: item })}
                                className="cursor-pointer"
                            >
                                {Favorite(item.id)
                                    ? <FavoriteIcon style={{ color: 'red' }} />
                                    : <FavoriteBorderIcon />}
                            </div>
                        </div>
                        <button onClick={() => dispatch({ type: "AddToBag", payload: item })}
                         className="w-full mt-4 h-10 rounded-xl bg-green-500 text-white hover:bg-green-600 text-xs lg:text-base" >Add to bag </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ManSection;
