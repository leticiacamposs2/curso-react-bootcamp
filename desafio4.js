// O código a seguir usa promises para manipular um resultado assíncrono. 
// O resultado é uma promise que gera um ID quando resolvido. 

// Esse ID deve ser usado para recuperar informações do banco de dados. 
// No final, sua função deve retornar a propriedade name da informação. 
// Em caso de erro, você deve retornar uma promise rejeitada com o erro fornecido. 
// Mas primeiro você deve notificar o errorManager com o erro.

async function job(result, database, errorManager) {

    try {
        const id = await result;
        const info = await database.get(id);
        return info.name
    } catch (error) {
        errorManager.notify(error);
        throw error;
    }
}