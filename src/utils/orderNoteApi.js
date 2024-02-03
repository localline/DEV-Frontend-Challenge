async function updateOrderNote(apiEndpoint, credentials, noteContent) {
    const requestBody = { order_note: noteContent };

    try {
        const response = await fetch(apiEndpoint, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${credentials}`,
            },
            body: JSON.stringify(requestBody),
        });

        if (response.ok) {
            const updatedNote = await response.json();
            return updatedNote;
        } else {
            console.error('Failed to update order note:', await response.text());
            return null;
        }
    } catch (error) {
        console.error('Error updating order note:', error);
        return null;
    }
}

export { updateOrderNote };
