import React from 'react'

function Weather() {

    const [form, setForm] = useState({
        city: '',
        country: ''
    })

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if (name = 'city') {
            setForm({ ...form, city: value })
        }
        if (name = 'country') {
            setForm({ ...form, country: value })
        }
    }

    return (
        <>
            <div>
                Weather App
            </div>
            <form>
                <input
                    type="text"
                    placeholder="city"
                    name="city"
                    onChange={(e) => handleChange(e)}
                />
        &nbsp; &nbsp; &nbsp;&nbsp;
        <input
                    type="text"
                    placeholder="Country"
                    name="country"
                    onChange={(e) => handleChange(e)}
                />
                <button className="getweather" onClick={(e) => weatherData(e)}>
                    Submit
        </button>
            </form>
        </>
    )
}

export default Weather
