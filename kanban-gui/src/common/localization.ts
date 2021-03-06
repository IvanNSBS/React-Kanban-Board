const Languages = {
    ptBr: 'ptBr',
    enUs: 'enUs'
}

const Texts = {
    btn_txt_create: 'btn_txt_create',
    btn_txt_edit: 'btn_txt_edit',
    btn_txt_delete: 'btn_txt_delete',
    txt_create_new_board: 'txt_create_new_board',
    txt_sidebar_display_board: 'txt_sidebar_display_board',
    txt_sidebar_all_boards: 'txt_sidebar_all_boards',
    txt_edit: 'txt_edit',
    txt_folders_plural: 'txt_folders_plural',
    txt_favorite_boards_title: 'txt_favorite_boards_title',
    input_board_modal_placeholder: 'input_board_modal_placeholder',
    input_create_folder_placeholder: 'input_create_folder_placeholder',
    input_create_folder_icon_placeholder: 'input_create_folder_icon_placeholder',
    btn_select_or_upload_img: 'btn_select_or_upload_img',
    txt_no_boards_or_folders_created: 'txt_no_boards_or_folders_created',
    txt_tags_epics: 'txt_tags_epics',
    txt_uml_diagram: 'txt_uml_diagram',
    btn_add_new_card: 'btn_add_new_card',
    btn_add_list: 'btn_add_list',
    input_add_new_list: 'input_add_new_list',
    input_ph_insert_list_title: 'input_ph_insert_list_title',
    btn_add_card: 'btn_add_card',
    input_ph_insert_card_title: 'input_ph_insert_card_title',
    txt_confirm_delete: 'txt_confirm_delete'
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
    'btn_txt_edit': {
        'ptBr': 'Editar',
        'enUs': 'Edit'
    },
    'btn_txt_delete': {
        'ptBr': 'Excluir',
        'enUs': 'Delete'
    },
    'txt_sidebar_display_board': {
        'ptBr': 'Mostrar Quadros',
        'enUs': 'Display Boards'
    },
    'txt_sidebar_all_boards': {
        'ptBr': 'Todos os Quadros',
        'enUs': 'All Boards'
    },
    'txt_edit': {
        'ptBr': 'Editar',
        'enUs': 'Edit'
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
        'ptBr': 'Url do ??cone(opcional)',
        'enUs': 'Icon Url(optional)'
    },
    'btn_select_or_upload_img':{
        'ptBr': 'Escolher',
        'enUs': 'Select'
    },
    'txt_no_boards_or_folders_created': {
        'ptBr': 'Comece criando uma pasta para seus quadros',
        'enUs': 'Start by creating a folder for your boards'
    },
    'txt_tags_epics': {
        'ptBr': 'Tags e Epics',
        'enUs': 'Tags and Epics'
    },
    'txt_uml_diagram': {
        'ptBr': 'Diagrama UML',
        'enUs': 'UML Diagram'
    },
    'btn_add_new_card': {
        'ptBr': 'Adicionar um cart??o',
        'enUs': 'Add a card'
    },
    'btn_add_list': {
        'ptBr': 'Adicionar Lista',
        'enUs': 'Add list'
    },
    'input_add_new_list': {
        'ptBr': 'Adicionar outra lista',
        'enUs': 'Add another list'
    },
    'input_ph_insert_list_title': {
        'ptBr': 'Insira o t??tulo da lista...',
        'enUs': 'Insert the list title...'
    },
    'btn_add_card': { 
        'ptBr': 'Adicionar Cart??o',
        'enUs': 'Add Card'
    },
    'input_ph_insert_card_title': {
        'ptBr': 'Insira um t??tulo para o cart??o...',
        'enUs': 'Insert a title for the cartd...'
    },
    'txt_confirm_delete': {
        'ptBr': 'Voc?? tem certeza de que quer deletar este elemento?',
        'enUs': 'Are you sure you want to delete this element?'
    }
};

function getLocalizedText(languageId: string, textId: string):string {
    return Localization[textId][languageId];
}

export { Languages, Texts, getLocalizedText }