import {MosaicSupplyType, NetworkType} from 'nem2-sdk'

export const NETWORK_PARAMS = {
    DEFAULT_NETWORK_TYPE: 'MIJIN_TEST',
    ENCODED_ADDRESS_LENGTH: 50,
    GENERATION_HASH_LENGTH: 64,
    MAX_TRANSACTION_MAIN_PROPS_LINES: 4,
    MAX_MESSAGE_LENGTH: 1024,
    MIN_MIN_APPROVAL_DELTA: -15,
    MAX_MIN_APPROVAL_DELTA: 15,
    MIN_MIN_REMOVAL_DELTA: -15,
    MAX_MIN_REMOVAL_DELTA: 15,
    NAMESPACE_MAX_LENGTH: 64,
    NEMESIS_BLOCK_TIMESTAMP: 1459468800,
    MAX_MOSAIC_ATOMIC_UNITS: 9000000000000000,
    MAX_MOSAIC_DIVISIBILITY: 6,
    MAX_MOSAIC_DURATION: 21024000,
    MIN_NAMESPACE_DURATION: 4,
    MAX_NAMESPACE_DURATION: 2102400,
    MIN_WALLET_NAME_LENGTH: 1,
    MAX_WALLET_NAME_LENGTH: 64,
    MOSAIC_ID_LENGTH: 16,
    RESET_FORM_FIELDS_TIMEOUT: 10000,
    PUBLIC_KEY_LENGTH: 64,
    PRIVATE_KEY_LENGTH: 64,
}

export const SDK_PARAMS = {
    mosaicSupplyTypes: Object.keys(MosaicSupplyType)
        .filter(key => Number.isNaN(parseFloat(key))),
    availableNetworkTypes: Object.keys(NetworkType)
        .filter(key => Number.isNaN(parseFloat(key)))
}

export const APP_PARAMS = {
    MIN_PASSWORD_LENGTH: 8,
    MAX_PASSWORD_LENGTH: 32,
    PASSWORD_SPECIAL_CHAR: '-_!@#$&*',
}
