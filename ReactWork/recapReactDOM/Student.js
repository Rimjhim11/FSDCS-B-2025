const parent=document.getElementById('parent');
//console.log(parent);
const root=ReactDOM.createRoot(parent);
//const h2=React.createElement("h2",{style:{color:'brown',backgroundColor:'pink'}},"Welcome to React App");
//root.render(h2);


//JSX
const pic = <img src="https://imgcdn.floweraura.com/serene-white-rose-bouquet-9781110fl-C_0.jpg" alt="flower" style={{ width: "200px", height: "250px", borderRadius: "10px" }} />;
const myName=<h2 style={{color:"pink"}}>Rimjhim Prakash</h2>;
const branch=<h2>CS-B</h2>;
const college=<h2>ABES Engineering College</h2>;
const container=(
    <div >
        {pic}
        {myName}
        {branch}
        {college}
    </div>     
);
root.render(container);    