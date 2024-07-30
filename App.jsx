import React from "react";

const App = () => {
    return( 
        <div classname=" bg-[#1F1E24] w-screen h-screen flex">

            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        
        
        </div>
    );
};

export default App;