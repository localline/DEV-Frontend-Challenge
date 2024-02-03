import {useState} from 'react';
import {sendNote} from '@/app/services/notes';

export default function NoteForm({orderId}) {
  const [note, setNote] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  function handleInput(e) {
    setError('');

    setNote(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!note) {
      setError('You must enter a note to send a note.');

      return;
    }

    setLoading(true);
    await sendNote(note, orderId);
    setNote('');
    setLoading(false);
  }

  return (
    <form className={'flex flex-col gap-2'} onSubmit={handleSubmit}>
      <label className={'flex flex-col text-sm gap-2'}>
        Send another note
        <textarea
          name={'order_note'}
          className={`border border-Grey300 rounded resize-none p-3 text-Grey800 ${error && 'border-2 border-Red600'}`}
          rows="6" value={note}
          onInput={handleInput}/>
      </label>
      <div className={'flex'}>
        {error && <em className={'text-Red500 text-xs my-auto'}>{error}</em>}
        <button className={`button-std w-24 text-sm ml-auto ${loading && 'cursor-not-allowed opacity-50'}`}
                disabled={loading}>
          Send note
        </button>
      </div>
    </form>
  )
}
