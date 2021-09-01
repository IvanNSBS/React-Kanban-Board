const Languages = {
    ptBr: 'ptBr',
    enUs: 'enUs'
}

const Texts = {
    create: 'create',
    create_new_board: 'create_new_board',
    show_boards: 'show_all_boards',
    configurations: 'configurations',
    folders: 'folders',
    favorite_boards: 'favorite_boards',
    board_name: 'board_name',
    insert_folder_name: 'insert_folder_name'
}

const Localization: Record<string, Record<string, string>> = 
{
    'create_new_board': { 
        'ptBr': 'Criar Novo Quadro',
        'enUs': 'Create New Board'
    },
    'create': {
        'ptBr': 'Criar',
        'enUs': 'Create'
    },
    'display_boards': {
        'ptBr': 'Mostrar Quadros',
        'enUs': 'Display Boards'
    },
    'configurations': {
        'ptBr': 'Configurações',
        'enUs': 'Configurations'
    },
    'folders': {
        'ptBr': 'Pastas',
        'enUs': 'Folders'
    },
    'favorite_boards': {
        'ptBr': 'Quadros Favoritos',
        'enUs': 'Favorite Boards'
    },
    'board_name': {
        'ptBr': 'Nome do Quadro',
        'enUs': 'Board Name'
    },
    'insert_folder_name': {
        'ptBr': 'Inserir um nome para a pasta...',
        'enUs': 'Insert a name for the folder...'
    }
};

Localization['create_new_board'] = {'ptBr': 'asd'};


function getLocalizedText(languageId: string, textId: string):string {
    return Localization[textId][languageId];
}


export { Languages, Texts, getLocalizedText }