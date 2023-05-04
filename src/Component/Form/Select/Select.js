import styles from './select.module.css';

function Select({ template, setTemplate }) {
  function chooseMemeTemplate(e) {
    setTemplate(e.target.value);
  }

  return (
    <div className={styles.container}>
      <label htmlFor="templateSelector">Meme Template:</label>
      <select value={template} onChange={chooseMemeTemplate}>
        <option>Doge</option>
        <option value="fry">Fry</option>
        <option value="zuckerberg">Zuckerberg</option>
        <option value="chosen">Chosen</option>
        <option value="cheems">Cheems</option>
        <option value="country">Country</option>
        <option value="crazypills">Crazypills</option>
      </select>
    </div>
  );
}

export default Select;