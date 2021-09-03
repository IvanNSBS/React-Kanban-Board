const Languages = {
    ptBr: 'ptBr',
    enUs: 'enUs'
}

const Texts = {
    btn_txt_create: 'btn_txt_create',
    txt_create_new_board: 'txt_create_new_board',
    txt_sidebar_display_board: 'txt_sidebar_display_board',
    txt_sidebar_all_boards: 'txt_sidebar_all_boards',
    txt_configurations_plural: 'txt_configurations_plural',
    txt_folders_plural: 'txt_folders_plural',
    txt_favorite_boards_title: 'txt_favorite_boards_title',
    input_board_modal_placeholder: 'input_board_modal_placeholder',
    input_create_folder_placeholder: 'input_create_folder_placeholder',
    input_create_folder_icon_placeholder: 'input_create_folder_icon_placeholder',
    btn_select_or_upload_img: 'btn_select_or_upload_img',
    txt_no_boards_or_folders_created: 'txt_no_boards_or_folders_created'
}

const Localization: Record<string, Record<string, string>> = 
{
    'txt_create_new_board': { 
        'ptBr': 'Criar um Novo Quadro',
        'enUs': 'Create a New Board'
    },
    'btn_txt_create': {
        'ptBr': 'Criar',
        'enUs': 'Create'
    },
    'txt_sidebar_display_board': {
        'ptBr': 'Mostrar Quadros',
        'enUs': 'Display Boards'
    },
    'txt_sidebar_all_boards': {
        'ptBr': 'Todos os Quadros',
        'enUs': 'All Boards'
    },
    'txt_configurations_plural': {
        'ptBr': 'Configurações',
        'enUs': 'Configurations'
    },
    'txt_folders_plural': {
        'ptBr': 'Pastas',
        'enUs': 'Folders'
    },
    'txt_favorite_boards_title': {
        'ptBr': 'Quadros Favoritos',
        'enUs': 'Favorite Boards'
    },
    'input_board_modal_placeholder': {
        'ptBr': 'Nome do Quadro',
        'enUs': 'Board Name'
    },
    'input_create_folder_placeholder': {
        'ptBr': 'Inserir um nome para a pasta...',
        'enUs': 'Insert a name for the folder...'
    },
    'input_create_folder_icon_placeholder': {
        'ptBr': 'Url do Ícone(opcional)',
        'enUs': 'Icon Url(optional)'
    },
    'btn_select_or_upload_img':{
        'ptBr': 'Escolher',
        'enUs': 'Select'
    },
    'txt_no_boards_or_folders_created': {
        'ptBr': 'Comece criando uma pasta para seus quadros',
        'enUs': 'Start by creating a folder for your boards'
    }
};

function getLocalizedText(languageId: string, textId: string):string {
    return Localization[textId][languageId];
}

export { Languages, Texts, getLocalizedText }