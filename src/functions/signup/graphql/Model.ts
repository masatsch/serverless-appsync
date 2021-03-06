/* tslint:disable */
/* eslint-disable */
import { DeepOmit } from './DeepOmit';

export type User = DeepOmit<Exclude<GetUserQuery['getUser'], null>, '__typename'>;
export type Output<T> = { data: T }

export type CreateUserInput = {
    id?: string | null,
    cognito_username: string,
    email: string,
    role: string,
};

export type ModelUserConditionInput = {
    cognito_username?: ModelStringInput | null,
    email?: ModelStringInput | null,
    role?: ModelStringInput | null,
    and?: Array<ModelUserConditionInput | null> | null,
    or?: Array<ModelUserConditionInput | null> | null,
    not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
    ne?: string | null,
    eq?: string | null,
    le?: string | null,
    lt?: string | null,
    ge?: string | null,
    gt?: string | null,
    contains?: string | null,
    notContains?: string | null,
    between?: Array<string | null> | null,
    beginsWith?: string | null,
    attributeExists?: boolean | null,
    attributeType?: ModelAttributeTypes | null,
    size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
    binary = "binary",
    binarySet = "binarySet",
    bool = "bool",
    list = "list",
    map = "map",
    number = "number",
    numberSet = "numberSet",
    string = "string",
    stringSet = "stringSet",
    _null = "_null",
}

export type ModelIDInput = {
    ne?: string | null,
    eq?: string | null,
    le?: string | null,
    lt?: string | null,
    ge?: string | null,
    gt?: string | null,
    contains?: string | null,
    notContains?: string | null,
    between?: Array<string | null> | null,
    beginsWith?: string | null,
    attributeExists?: boolean | null,
    attributeType?: ModelAttributeTypes | null,
    size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
    ne?: number | null,
    eq?: number | null,
    le?: number | null,
    lt?: number | null,
    ge?: number | null,
    gt?: number | null,
    between?: Array<number | null> | null,
};

export type UpdateUserInput = {
    id: string,
    cognito_username?: string | null,
    email?: string | null,
    role?: string | null,
};

export type DeleteUserInput = {
    id?: string | null,
};

export type CreateUserMutationVariables = {
    input: CreateUserInput,
    condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
    createUser: {
        __typename: "User",
        id: string,
        cognito_username: string,
        email: string,
        role: string,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type UpdateUserMutationVariables = {
    input: UpdateUserInput,
    condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
    updateUser: {
        __typename: "User",
        id: string,
        cognito_username: string,
        email: string,
        role: string,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type DeleteUserMutationVariables = {
    input: DeleteUserInput,
    condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
    deleteUser: {
        __typename: "User",
        id: string,
        cognito_username: string,
        email: string,
        role: string,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type ModelUserFilterInput = {
    id?: ModelIDInput | null,
    cognito_username?: ModelStringInput | null,
    email?: ModelStringInput | null,
    role?: ModelStringInput | null,
    and?: Array<ModelUserFilterInput | null> | null,
    or?: Array<ModelUserFilterInput | null> | null,
    not?: ModelUserFilterInput | null,
};

export type GetUserQueryVariables = {
    id: string,
};

export type GetUserQuery = {
    getUser: {
        __typename: "User",
        id: string,
        cognito_username: string,
        email: string,
        role: string,
        createdAt: string,
        updatedAt: string,
    } | null,
};

export type ListUsersQueryVariables = {
    filter?: ModelUserFilterInput | null,
    limit?: number | null,
    nextToken?: string | null,
};

export type ListUsersQuery = {
    listUsers: {
        __typename: "ModelUserConnection",
        items: Array<{
            __typename: "User",
            id: string,
            cognito_username: string,
            email: string,
            role: string,
            createdAt: string,
            updatedAt: string,
        } | null> | null,
        nextToken: string | null,
    } | null,
};
