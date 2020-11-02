import React, {useContext, useState} from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { GithubContext } from '../context/github/githubContext';

export const Search = () => {
  const [value, setValue] = useState(``);
  const alert = useContext(AlertContext);
  const github = useContext(GithubContext)

  const onSubmit = (evt) => {
    if (evt.key !== 'Enter') {
      return;
    }

    if (value.trim()) {
      alert.hide();
      github.search(value.trim())
    } else {
      alert.show(`Введите данные пользователя!`);
      github.clearUsers();
    }
  }
  
  return (
    <div className="form-group">
      <input 
        type="text" 
        className="form-control"
        value={value}
        placeholder="Введите ник пользователя"
        onChange={(evt) => setValue(evt.target.value)}
        onKeyPress={onSubmit}
      />
    </div>
  )
}
