import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';


export default function Register(props) {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [day, setDay] = useState("")
    const [month, setMonth] = useState("")
    const [year, setYear] = useState("")

    const [checkBox, setCheckBox] = useState(false)

    const history = useHistory();

    const enter = () =>{
        // check if username is available
        
        if(userName.length < 4){
            alert("Username must be at least 6 characters.");
            return;
        }
        if(!props.checkUserName(userName)){
            alert("Username is already taken.");
            return;
        }
        //check password
        if(password.length < 6 ){
            alert("Password must be at least 6 characters.");
            return;

        }
        if(password != confirmPassword){
            alert("Password don't match.");
            return;
        }
        if(!(day >=1 && day<=31)||!(month >=1 && month<=12)||!(year >=1900 && year<=2020) ){
            alert("Enter Birthday");
            return;
        }
        let bday = new Date(year,parseInt(month, 10)-1,day);

        if(!checkBox){
            alert("Please check this out.");
            return;
        }
        props.register(userName,password,bday);
        if(props.checkUser(userName,password)){
          
        }else{
            alert("Account " + userName + " created!  Please Sign In")
            history.push('/login');
        }
    }

    return (
        <div className="home-box">
            <h3> Register </h3>
            <br/>
            <br/>            
            <br/>
            <div className="form-register">
                
                <div class="form-group">
                    <label for="userName1">Username</label>
                    <input onChange={ (e) =>{setUserName(e.target.value)} }  type="text" class="form-control" id="userName1"  aria-label="Username" aria-describedby="addon-wrapping"/>
                </div>
                <div class="form-group">
                    <label for="inputPassword1">Password</label>
                    <input onChange={ (e) =>{setPassword(e.target.value)} }  type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="form-group">
                    <label for="inputPassword2">Confirm Password</label>
                    <input onChange={ (e) =>{setConfirmPassword(e.target.value)} } type="password" class="form-control" id="inputPassword2"/>
                </div>
            

                <div class="form-row">
                    
                    <div class="col-md-12 mb-1 ">
                    <label for="validationDefault04"> Brith Date</label>

                    </div>
                    <div class="col-md-4 mb-3">
                        <select onChange={(e)=>{setMonth(e.target.value)}} class="custom-select" id="select-month" required>
                            <option selected disabled value="">Month</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>




                        </select>                    
                    </div>
                    <div class="col-md-4 mb-3 ">
                        {/* <label className="labels" for="month-select"> Month</label> */}
                        <select onChange={(e)=>{setDay(e.target.value)}} class="custom-select" id="select-day" required>
                            <option selected disabled value="">Day</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                            <option>16</option>
                            <option>17</option>
                            <option>18</option>
                            <option>19</option>
                            <option>20</option>
                            <option>21</option>
                            <option>22</option>
                            <option>23</option>
                            <option>24</option>
                            <option>25</option>
                            <option>26</option>
                            <option>27</option>
                            <option>28</option>
                            <option>29</option>
                            <option>30</option>
                            <option>31</option>

                        </select>
                    </div>
                    <div class="col-md-4 mb-3">
                        {/* <label for="validationDefault05">Year</label> */}
                        {/* <input  placeholder="Year" type="text" class="form-control" id="validationDefault05" required/> */}
                        <select onChange={(e)=>{setYear(e.target.value)}} class="custom-select" id="year-select" required>
                            <option selected disabled value="">Year</option>
                            <option value="2018">2020</option>
    <option value="2017">2019</option>
    
    <option value="2018">2018</option>
    <option value="2017">2017</option>
    <option value="2016">2016</option>
    <option value="2015">2015</option>
    <option value="2014">2014</option>
    <option value="2013">2013</option>
    <option value="2012">2012</option>
    <option value="2011">2011</option>
    <option value="2010">2010</option>
    <option value="2009">2009</option>
    <option value="2008">2008</option>
    <option value="2007">2007</option>
    <option value="2006">2006</option>
    <option value="2005">2005</option>
    <option value="2004">2004</option>
    <option value="2003">2003</option>
    <option value="2002">2002</option>
    <option value="2001">2001</option>
    <option value="2000">2000</option>
    <option value="1999">1999</option>
    <option value="1998">1998</option>
    <option value="1997">1997</option>
    <option value="1996">1996</option>
    <option value="1995">1995</option>
    <option value="1994">1994</option>
    <option value="1993">1993</option>
    <option value="1992">1992</option>
    <option value="1991">1991</option>
    <option value="1990">1990</option>
    <option value="1989">1989</option>
    <option value="1988">1988</option>
    <option value="1987">1987</option>
    <option value="1986">1986</option>
    <option value="1985">1985</option>
    <option value="1984">1984</option>
    <option value="1983">1983</option>
    <option value="1982">1982</option>
    <option value="1981">1981</option>
    <option value="1980">1980</option>
    <option value="1979">1979</option>
    <option value="1978">1978</option>
    <option value="1977">1977</option>
    <option value="1976">1976</option>
    <option value="1975">1975</option>
    <option value="1974">1974</option>
    <option value="1973">1973</option>
    <option value="1972">1972</option>
    <option value="1971">1971</option>
    <option value="1970">1970</option>
    <option value="1969">1969</option>
    <option value="1968">1968</option>
    <option value="1967">1967</option>
    <option value="1966">1966</option>
    <option value="1965">1965</option>
    <option value="1964">1964</option>
    <option value="1963">1963</option>
    <option value="1962">1962</option>
    <option value="1961">1961</option>
    <option value="1960">1960</option>
    <option value="1959">1959</option>
    <option value="1958">1958</option>
    <option value="1957">1957</option>
    <option value="1956">1956</option>
    <option value="1955">1955</option>
    <option value="1954">1954</option>
    <option value="1953">1953</option>
    <option value="1952">1952</option>
    <option value="1951">1951</option>
    <option value="1950">1950</option>
    <option value="1949">1949</option>
    <option value="1948">1948</option>
    <option value="1947">1947</option>
    <option value="1946">1946</option>
    <option value="1945">1945</option>
    <option value="1944">1944</option>
    <option value="1943">1943</option>
    <option value="1942">1942</option>
    <option value="1941">1941</option>
    <option value="1940">1940</option>
    <option value="1939">1939</option>
    <option value="1938">1938</option>
    <option value="1937">1937</option>
    <option value="1936">1936</option>
    <option value="1935">1935</option>
    <option value="1934">1934</option>
    <option value="1933">1933</option>
    <option value="1932">1932</option>
    <option value="1931">1931</option>
    <option value="1930">1930</option>
    <option value="1929">1929</option>
    <option value="1928">1928</option>
    <option value="1927">1927</option>
    <option value="1926">1926</option>
    <option value="1925">1925</option>
    <option value="1924">1924</option>
    <option value="1923">1923</option>
    <option value="1922">1922</option>
    <option value="1921">1921</option>
    <option value="1920">1920</option>
    <option value="1919">1919</option>
    <option value="1918">1918</option>
    <option value="1917">1917</option>
    <option value="1916">1916</option>
    <option value="1915">1915</option>
    <option value="1914">1914</option>
    <option value="1913">1913</option>
    <option value="1912">1912</option>
    <option value="1911">1911</option>
    <option value="1910">1910</option>
    <option value="1909">1909</option>
    <option value="1908">1908</option>
    <option value="1907">1907</option>
    <option value="1906">1906</option>
    <option value="1905">1905</option>

                       </select>
                    </div>
                </div>

                
                <div class="form-group form-check">
                    <input onChange={(e)=>{setCheckBox(e.target.checked)}} type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
               
                <button onClick={enter}  class="btn btn-primary" >Register</button>
            </div>       
        </div>
           
    )
}
