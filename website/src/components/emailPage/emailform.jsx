import '../../styling/middle.css';

export default function EmailForm(){
    return(
        <form className="emailFields">
        <label htmlFor="email">Email </label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="mess">Message: </label>
                <textarea id="mess" name="mess" rows="4"></textarea>

                <input type="submit" value="Submit" />
      </form>
      
    );
}