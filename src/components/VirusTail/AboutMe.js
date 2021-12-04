import styles from './AboutMe.module.css'

const AboutMe = () => {
    return(
        <div className = {styles.aboumeContaner} >
             <h1>Contact</h1> 
            <form>
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                <label for="country">Country</label>
                <select id="country" name="country">
                <option value="none">--None--</option>
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
                </select>

                <label for="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

                <button className= {styles.submit_button}>Submit</button>
            </form>
        </div>
    );
};

export default AboutMe;