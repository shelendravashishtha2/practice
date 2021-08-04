import Button from "./Button";
import "./ButtonsGrid.css";


const ButtonGrid = (props) => {
    

    return (
        <div className = "buttons">
            <Button k = { "+" } handeller = { props.onclick }/>
            <Button k = {"-"} handeller = { props.onclick }/>
            <Button k = {"/"} handeller = { props.onclick }/>
            <Button k = {"*"} handeller = { props.onclick }/>       
            <Button k = { "1"} handeller = { props.onclick }/>
            <Button k = {"2"}handeller = { props.onclick }/>
            <Button k = {"3"}handeller = { props.onclick }/>
            <Button k = {"4"}handeller = { props.onclick }/>
            <Button k = {"5"}handeller = { props.onclick }/>
            <Button k = {"6"}handeller = { props.onclick }/>
            <Button k = {"7"}handeller = { props.onclick }/>
            <Button k = {"8"}handeller = { props.onclick }/>   
            <Button k = {"9"}handeller = { props.onclick }/>   
            <Button k = {"0"}handeller = { props.onclick }/>
            <Button k = {"."}handeller = { props.onclick }/>
           <Button k = {"="}handeller = { props.onclick }/>   
           <Button k = { "(" } handeller = { props.onclick }/>
            <Button k = {")"} handeller = { props.onclick }/>
            <Button className = "c" k = {"C"} handeller = { props.onclick }/>
      </div>
    );
}

export default ButtonGrid;