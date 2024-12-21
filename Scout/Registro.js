function registerGroup() {
    // Obtener los valores de los inputs
    const groupName = document.getElementById('group-name').value;
    const designatedArea = document.getElementById('designated-area').value;
    
    // Verificar que ambos campos tengan valores
    if (groupName && designatedArea) {
        // Crear un nuevo elemento para mostrar el grupo registrado
        const groupInfo = document.createElement('p');
        groupInfo.textContent = `Grupo: ${groupName}, Ubicación: ${designatedArea}`;
        
        // Agregar el nuevo elemento a la lista de grupos
        document.getElementById('group-info-list').appendChild(groupInfo);
        
        // Limpiar los campos después de registrar
        document.getElementById('group-name').value = '';
        document.getElementById('designated-area').value = '';
    } else {
        alert('Por favor, complete ambos campos.');
    }
}