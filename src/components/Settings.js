
function Settings() {

    return (
        <div id='settings-container'>

            <label>Difficulty</label> 
            <select>
                <option>Select Difficulty</option>
            </select>

            <label>Category</label>
            <select>
                <option>Select Category</option>
            </select>

            <label>Time Limit</label>
            <input type='time'></input>

        </div>
    )
}

export default Settings