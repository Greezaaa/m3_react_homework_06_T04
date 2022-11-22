const Sets = ({ data, setSet }) => {
  
    
    return (
        <select defaultValue={false} onChange={(e) => {setSet(e.target.value)}}>
            <option value={false} disabled={true}>Selecione su set</option>
            {
                data.sets.map((set, i) => {
                    // console.log(set);
                    
                    return (
                        <option key={i} value={set.code}>{i+1} - {set.name}</option>
                    )
                })
            }
        </select>
    )
}
export default Sets