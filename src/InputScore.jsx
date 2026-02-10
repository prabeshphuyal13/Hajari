

function InputScore({passScore, scores}){

    return(
        <>
            <div className="input-row row">
                <input type="number" key = {1} 
                    value={scores[0] || ''}
                    onChange = {(e) => {
                        passScore(0, Number(e.target.value))
                        }}/>
                <input type="number" key = {2} 
                    value={scores[1] || ''}
                    onChange = {(e) => {
                        passScore(1,Number(e.target.value))
                        }}/>
                <input type="number" key = {3} 
                    value={scores[2] || ''}
                    onChange = {(e) => {
                        passScore(2,Number(e.target.value))
                        }}/>
                <input type="number" key = {4} 
                    value={scores[3] || ''}
                    onChange = {(e) => {
                        passScore(3,Number(e.target.value))
                        }}/>
            </div>
            
        </>
    )
}
export default InputScore