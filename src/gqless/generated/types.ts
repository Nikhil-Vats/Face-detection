import * as extensions from "../extensions";
import {
  TypeData,
  ScalarType,
  FieldsType,
  EnumType,
  FieldsTypeArg
} from "gqless";

type Extension<TName extends string> = TName extends keyof typeof extensions
  ? typeof extensions[TName]
  : any;

/**
 * @name Boolean
 * @type SCALAR
 */
type t_Boolean<T extends boolean = boolean> = ScalarType<
  T,
  Extension<"Boolean">
>;

/**
 * @name Float
 * @type SCALAR
 */
type t_Float<T extends number = number> = ScalarType<T, Extension<"Float">>;

/**
 * @name ID
 * @type SCALAR
 */
type t_ID<T extends string = string> = ScalarType<T, Extension<"ID">>;

/**
 * @name Int
 * @type SCALAR
 */
type t_Int<T extends number = number> = ScalarType<T, Extension<"Int">>;

/**
 * @name Int_comparison_exp
 * @type INPUT_OBJECT
 */
export type Int_comparison_exp = {
  _eq?: number | null;
  _gt?: number | null;
  _gte?: number | null;
  _in?: number[] | null;
  _is_null?: boolean | null;
  _lt?: number | null;
  _lte?: number | null;
  _neq?: number | null;
  _nin?: number[] | null;
};

/**
 * @name String
 * @type SCALAR
 */
type t_String<T extends string = string> = ScalarType<T, Extension<"String">>;

/**
 * @name String_comparison_exp
 * @type INPUT_OBJECT
 */
export type String_comparison_exp = {
  _eq?: string | null;
  _gt?: string | null;
  _gte?: string | null;
  _ilike?: string | null;
  _in?: string[] | null;
  _is_null?: boolean | null;
  _like?: string | null;
  _lt?: string | null;
  _lte?: string | null;
  _neq?: string | null;
  _nilike?: string | null;
  _nin?: string[] | null;
  _nlike?: string | null;
  _nsimilar?: string | null;
  _similar?: string | null;
};

/**
 * @name __Directive
 * @type OBJECT
 */
type t___Directive = FieldsType<
  {
    __typename: t_String<"__Directive">;
    args: t___InputValue[];
    description?: t_String | null;
    locations: t___DirectiveLocation[];
    name: t_String;
  },
  Extension<"__Directive">
>;

/**
 * @name __DirectiveLocation
 * @type ENUM
 */
type t___DirectiveLocation = EnumType<
  | "ARGUMENT_DEFINITION"
  | "ENUM"
  | "ENUM_VALUE"
  | "FIELD"
  | "FIELD_DEFINITION"
  | "FRAGMENT_DEFINITION"
  | "FRAGMENT_SPREAD"
  | "INLINE_FRAGMENT"
  | "INPUT_FIELD_DEFINITION"
  | "INPUT_OBJECT"
  | "INTERFACE"
  | "MUTATION"
  | "OBJECT"
  | "QUERY"
  | "SCALAR"
  | "SCHEMA"
  | "SUBSCRIPTION"
  | "UNION"
>;

/**
 * @name __EnumValue
 * @type OBJECT
 */
type t___EnumValue = FieldsType<
  {
    __typename: t_String<"__EnumValue">;
    deprecationReason?: t_String | null;
    description?: t_String | null;
    isDeprecated: t_Boolean;
    name: t_String;
  },
  Extension<"__EnumValue">
>;

/**
 * @name __Field
 * @type OBJECT
 */
type t___Field = FieldsType<
  {
    __typename: t_String<"__Field">;
    args: t___InputValue[];
    deprecationReason?: t_String | null;
    description?: t_String | null;
    isDeprecated: t_Boolean;
    name: t_String;
    type: t___Type;
  },
  Extension<"__Field">
>;

/**
 * @name __InputValue
 * @type OBJECT
 */
type t___InputValue = FieldsType<
  {
    __typename: t_String<"__InputValue">;
    defaultValue?: t_String | null;
    description?: t_String | null;
    name: t_String;
    type: t___Type;
  },
  Extension<"__InputValue">
>;

/**
 * @name __Schema
 * @type OBJECT
 */
type t___Schema = FieldsType<
  {
    __typename: t_String<"__Schema">;
    directives: t___Directive[];
    mutationType?: t___Type | null;
    queryType: t___Type;
    subscriptionType?: t___Type | null;
    types: t___Type[];
  },
  Extension<"__Schema">
>;

/**
 * @name __Type
 * @type OBJECT
 */
type t___Type = FieldsType<
  {
    __typename: t_String<"__Type">;
    description?: t_String | null;
    enumValues?: FieldsTypeArg<
      { includeDeprecated?: boolean | null },
      t___EnumValue[] | null
    >;
    fields?: FieldsTypeArg<
      { includeDeprecated?: boolean | null },
      t___Field[] | null
    >;
    inputFields?: t___InputValue[] | null;
    interfaces?: t___Type[] | null;
    kind: t___TypeKind;
    name?: t_String | null;
    ofType?: t___Type | null;
    possibleTypes?: t___Type[] | null;
  },
  Extension<"__Type">
>;

/**
 * @name __TypeKind
 * @type ENUM
 */
type t___TypeKind = EnumType<
  | "ENUM"
  | "INPUT_OBJECT"
  | "INTERFACE"
  | "LIST"
  | "NON_NULL"
  | "OBJECT"
  | "SCALAR"
  | "UNION"
>;

/**
 * @name mutation_root
 * @type OBJECT
 */
type t_mutation_root = FieldsType<
  {
    __typename: t_String<"mutation_root">;

    /**
     * delete data from the table: "profile"
     */
    delete_profile?: FieldsTypeArg<
      { where: profile_bool_exp },
      t_profile_mutation_response | null
    >;

    /**
     * delete single row from the table: "profile"
     */
    delete_profile_by_pk?: FieldsTypeArg<{ id: number }, t_profile | null>;

    /**
     * insert data into the table: "profile"
     */
    insert_profile?: FieldsTypeArg<
      {
        objects: profile_insert_input[];
        on_conflict?: profile_on_conflict | null;
      },
      t_profile_mutation_response | null
    >;

    /**
     * insert a single row into the table: "profile"
     */
    insert_profile_one?: FieldsTypeArg<
      {
        object: profile_insert_input;
        on_conflict?: profile_on_conflict | null;
      },
      t_profile | null
    >;

    /**
     * update data of the table: "profile"
     */
    update_profile?: FieldsTypeArg<
      {
        _inc?: profile_inc_input | null;
        _set?: profile_set_input | null;
        where: profile_bool_exp;
      },
      t_profile_mutation_response | null
    >;

    /**
     * update single row of the table: "profile"
     */
    update_profile_by_pk?: FieldsTypeArg<
      {
        _inc?: profile_inc_input | null;
        _set?: profile_set_input | null;
        pk_columns: profile_pk_columns_input;
      },
      t_profile | null
    >;
  },
  Extension<"mutation_root">
>;

/**
 * @name order_by
 * @type ENUM
 */
type t_order_by = EnumType<
  | "asc"
  | "asc_nulls_first"
  | "asc_nulls_last"
  | "desc"
  | "desc_nulls_first"
  | "desc_nulls_last"
>;

/**
 * @name profile
 * @type OBJECT
 */
type t_profile = FieldsType<
  {
    __typename: t_String<"profile">;
    id: t_Int;
    name: t_String;
  },
  Extension<"profile">
>;

/**
 * @name profile_aggregate
 * @type OBJECT
 */
type t_profile_aggregate = FieldsType<
  {
    __typename: t_String<"profile_aggregate">;
    aggregate?: t_profile_aggregate_fields | null;
    nodes: t_profile[];
  },
  Extension<"profile_aggregate">
>;

/**
 * @name profile_aggregate_fields
 * @type OBJECT
 */
type t_profile_aggregate_fields = FieldsType<
  {
    __typename: t_String<"profile_aggregate_fields">;
    avg?: t_profile_avg_fields | null;
    count?: FieldsTypeArg<
      { columns?: profile_select_column[] | null; distinct?: boolean | null },
      t_Int | null
    >;
    max?: t_profile_max_fields | null;
    min?: t_profile_min_fields | null;
    stddev?: t_profile_stddev_fields | null;
    stddev_pop?: t_profile_stddev_pop_fields | null;
    stddev_samp?: t_profile_stddev_samp_fields | null;
    sum?: t_profile_sum_fields | null;
    var_pop?: t_profile_var_pop_fields | null;
    var_samp?: t_profile_var_samp_fields | null;
    variance?: t_profile_variance_fields | null;
  },
  Extension<"profile_aggregate_fields">
>;

/**
 * @name profile_aggregate_order_by
 * @type INPUT_OBJECT
 */
export type profile_aggregate_order_by = {
  avg?: profile_avg_order_by | null;
  count?: order_by | null;
  max?: profile_max_order_by | null;
  min?: profile_min_order_by | null;
  stddev?: profile_stddev_order_by | null;
  stddev_pop?: profile_stddev_pop_order_by | null;
  stddev_samp?: profile_stddev_samp_order_by | null;
  sum?: profile_sum_order_by | null;
  var_pop?: profile_var_pop_order_by | null;
  var_samp?: profile_var_samp_order_by | null;
  variance?: profile_variance_order_by | null;
};

/**
 * @name profile_arr_rel_insert_input
 * @type INPUT_OBJECT
 */
export type profile_arr_rel_insert_input = {
  data: profile_insert_input[];
  on_conflict?: profile_on_conflict | null;
};

/**
 * @name profile_avg_fields
 * @type OBJECT
 */
type t_profile_avg_fields = FieldsType<
  {
    __typename: t_String<"profile_avg_fields">;
    id?: t_Float | null;
  },
  Extension<"profile_avg_fields">
>;

/**
 * @name profile_avg_order_by
 * @type INPUT_OBJECT
 */
export type profile_avg_order_by = { id?: order_by | null };

/**
 * @name profile_bool_exp
 * @type INPUT_OBJECT
 */
export type profile_bool_exp = {
  _and?: (profile_bool_exp | null)[] | null;
  _not?: profile_bool_exp | null;
  _or?: (profile_bool_exp | null)[] | null;
  id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
};

/**
 * @name profile_constraint
 * @type ENUM
 */
type t_profile_constraint = EnumType<"profile_pkey">;

/**
 * @name profile_inc_input
 * @type INPUT_OBJECT
 */
export type profile_inc_input = { id?: number | null };

/**
 * @name profile_insert_input
 * @type INPUT_OBJECT
 */
export type profile_insert_input = { id?: number | null; name?: string | null };

/**
 * @name profile_max_fields
 * @type OBJECT
 */
type t_profile_max_fields = FieldsType<
  {
    __typename: t_String<"profile_max_fields">;
    id?: t_Int | null;
    name?: t_String | null;
  },
  Extension<"profile_max_fields">
>;

/**
 * @name profile_max_order_by
 * @type INPUT_OBJECT
 */
export type profile_max_order_by = {
  id?: order_by | null;
  name?: order_by | null;
};

/**
 * @name profile_min_fields
 * @type OBJECT
 */
type t_profile_min_fields = FieldsType<
  {
    __typename: t_String<"profile_min_fields">;
    id?: t_Int | null;
    name?: t_String | null;
  },
  Extension<"profile_min_fields">
>;

/**
 * @name profile_min_order_by
 * @type INPUT_OBJECT
 */
export type profile_min_order_by = {
  id?: order_by | null;
  name?: order_by | null;
};

/**
 * @name profile_mutation_response
 * @type OBJECT
 */
type t_profile_mutation_response = FieldsType<
  {
    __typename: t_String<"profile_mutation_response">;

    /**
     * number of affected rows by the mutation
     */
    affected_rows: t_Int;

    /**
     * data of the affected rows by the mutation
     */
    returning: t_profile[];
  },
  Extension<"profile_mutation_response">
>;

/**
 * @name profile_obj_rel_insert_input
 * @type INPUT_OBJECT
 */
export type profile_obj_rel_insert_input = {
  data: profile_insert_input;
  on_conflict?: profile_on_conflict | null;
};

/**
 * @name profile_on_conflict
 * @type INPUT_OBJECT
 */
export type profile_on_conflict = {
  constraint: profile_constraint;
  update_columns: profile_update_column[];
  where?: profile_bool_exp | null;
};

/**
 * @name profile_order_by
 * @type INPUT_OBJECT
 */
export type profile_order_by = { id?: order_by | null; name?: order_by | null };

/**
 * @name profile_pk_columns_input
 * @type INPUT_OBJECT
 */
export type profile_pk_columns_input = { id: number };

/**
 * @name profile_select_column
 * @type ENUM
 */
type t_profile_select_column = EnumType<"id" | "name">;

/**
 * @name profile_set_input
 * @type INPUT_OBJECT
 */
export type profile_set_input = { id?: number | null; name?: string | null };

/**
 * @name profile_stddev_fields
 * @type OBJECT
 */
type t_profile_stddev_fields = FieldsType<
  {
    __typename: t_String<"profile_stddev_fields">;
    id?: t_Float | null;
  },
  Extension<"profile_stddev_fields">
>;

/**
 * @name profile_stddev_order_by
 * @type INPUT_OBJECT
 */
export type profile_stddev_order_by = { id?: order_by | null };

/**
 * @name profile_stddev_pop_fields
 * @type OBJECT
 */
type t_profile_stddev_pop_fields = FieldsType<
  {
    __typename: t_String<"profile_stddev_pop_fields">;
    id?: t_Float | null;
  },
  Extension<"profile_stddev_pop_fields">
>;

/**
 * @name profile_stddev_pop_order_by
 * @type INPUT_OBJECT
 */
export type profile_stddev_pop_order_by = { id?: order_by | null };

/**
 * @name profile_stddev_samp_fields
 * @type OBJECT
 */
type t_profile_stddev_samp_fields = FieldsType<
  {
    __typename: t_String<"profile_stddev_samp_fields">;
    id?: t_Float | null;
  },
  Extension<"profile_stddev_samp_fields">
>;

/**
 * @name profile_stddev_samp_order_by
 * @type INPUT_OBJECT
 */
export type profile_stddev_samp_order_by = { id?: order_by | null };

/**
 * @name profile_sum_fields
 * @type OBJECT
 */
type t_profile_sum_fields = FieldsType<
  {
    __typename: t_String<"profile_sum_fields">;
    id?: t_Int | null;
  },
  Extension<"profile_sum_fields">
>;

/**
 * @name profile_sum_order_by
 * @type INPUT_OBJECT
 */
export type profile_sum_order_by = { id?: order_by | null };

/**
 * @name profile_update_column
 * @type ENUM
 */
type t_profile_update_column = EnumType<"id" | "name">;

/**
 * @name profile_var_pop_fields
 * @type OBJECT
 */
type t_profile_var_pop_fields = FieldsType<
  {
    __typename: t_String<"profile_var_pop_fields">;
    id?: t_Float | null;
  },
  Extension<"profile_var_pop_fields">
>;

/**
 * @name profile_var_pop_order_by
 * @type INPUT_OBJECT
 */
export type profile_var_pop_order_by = { id?: order_by | null };

/**
 * @name profile_var_samp_fields
 * @type OBJECT
 */
type t_profile_var_samp_fields = FieldsType<
  {
    __typename: t_String<"profile_var_samp_fields">;
    id?: t_Float | null;
  },
  Extension<"profile_var_samp_fields">
>;

/**
 * @name profile_var_samp_order_by
 * @type INPUT_OBJECT
 */
export type profile_var_samp_order_by = { id?: order_by | null };

/**
 * @name profile_variance_fields
 * @type OBJECT
 */
type t_profile_variance_fields = FieldsType<
  {
    __typename: t_String<"profile_variance_fields">;
    id?: t_Float | null;
  },
  Extension<"profile_variance_fields">
>;

/**
 * @name profile_variance_order_by
 * @type INPUT_OBJECT
 */
export type profile_variance_order_by = { id?: order_by | null };

/**
 * @name query_root
 * @type OBJECT
 */
type t_query_root = FieldsType<
  {
    __typename: t_String<"query_root">;

    /**
     * fetch data from the table: "profile"
     */
    profile: FieldsTypeArg<
      {
        distinct_on?: profile_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: profile_order_by[] | null;
        where?: profile_bool_exp | null;
      },
      t_profile[]
    >;

    /**
     * fetch aggregated fields from the table: "profile"
     */
    profile_aggregate: FieldsTypeArg<
      {
        distinct_on?: profile_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: profile_order_by[] | null;
        where?: profile_bool_exp | null;
      },
      t_profile_aggregate
    >;

    /**
     * fetch data from the table: "profile" using primary key columns
     */
    profile_by_pk?: FieldsTypeArg<{ id: number }, t_profile | null>;
  },
  Extension<"query_root">
>;

/**
 * @name subscription_root
 * @type OBJECT
 */
type t_subscription_root = FieldsType<
  {
    __typename: t_String<"subscription_root">;

    /**
     * fetch data from the table: "profile"
     */
    profile: FieldsTypeArg<
      {
        distinct_on?: profile_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: profile_order_by[] | null;
        where?: profile_bool_exp | null;
      },
      t_profile[]
    >;

    /**
     * fetch aggregated fields from the table: "profile"
     */
    profile_aggregate: FieldsTypeArg<
      {
        distinct_on?: profile_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: profile_order_by[] | null;
        where?: profile_bool_exp | null;
      },
      t_profile_aggregate
    >;

    /**
     * fetch data from the table: "profile" using primary key columns
     */
    profile_by_pk?: FieldsTypeArg<{ id: number }, t_profile | null>;
  },
  Extension<"subscription_root">
>;

/**
 * @name Boolean
 * @type SCALAR
 */
export type Boolean = TypeData<t_Boolean>;

/**
 * @name Float
 * @type SCALAR
 */
export type Float = TypeData<t_Float>;

/**
 * @name ID
 * @type SCALAR
 */
export type ID = TypeData<t_ID>;

/**
 * @name Int
 * @type SCALAR
 */
export type Int = TypeData<t_Int>;

/**
 * @name String
 * @type SCALAR
 */
export type String = TypeData<t_String>;

/**
 * @name __Directive
 * @type OBJECT
 */
export type __Directive = TypeData<t___Directive>;

/**
 * @name __DirectiveLocation
 * @type ENUM
 */
export enum __DirectiveLocation {
  ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION",
  ENUM = "ENUM",
  ENUM_VALUE = "ENUM_VALUE",
  FIELD = "FIELD",
  FIELD_DEFINITION = "FIELD_DEFINITION",
  FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION",
  FRAGMENT_SPREAD = "FRAGMENT_SPREAD",
  INLINE_FRAGMENT = "INLINE_FRAGMENT",
  INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION",
  INPUT_OBJECT = "INPUT_OBJECT",
  INTERFACE = "INTERFACE",
  MUTATION = "MUTATION",
  OBJECT = "OBJECT",
  QUERY = "QUERY",
  SCALAR = "SCALAR",
  SCHEMA = "SCHEMA",
  SUBSCRIPTION = "SUBSCRIPTION",
  UNION = "UNION"
}

/**
 * @name __EnumValue
 * @type OBJECT
 */
export type __EnumValue = TypeData<t___EnumValue>;

/**
 * @name __Field
 * @type OBJECT
 */
export type __Field = TypeData<t___Field>;

/**
 * @name __InputValue
 * @type OBJECT
 */
export type __InputValue = TypeData<t___InputValue>;

/**
 * @name __Schema
 * @type OBJECT
 */
export type __Schema = TypeData<t___Schema>;

/**
 * @name __Type
 * @type OBJECT
 */
export type __Type = TypeData<t___Type>;

/**
 * @name __TypeKind
 * @type ENUM
 */
export enum __TypeKind {
  ENUM = "ENUM",
  INPUT_OBJECT = "INPUT_OBJECT",
  INTERFACE = "INTERFACE",
  LIST = "LIST",
  NON_NULL = "NON_NULL",
  OBJECT = "OBJECT",
  SCALAR = "SCALAR",
  UNION = "UNION"
}

/**
 * @name mutation_root
 * @type OBJECT
 */
export type mutation_root = TypeData<t_mutation_root>;

/**
 * @name order_by
 * @type ENUM
 */
export enum order_by {
  asc = "asc",
  asc_nulls_first = "asc_nulls_first",
  asc_nulls_last = "asc_nulls_last",
  desc = "desc",
  desc_nulls_first = "desc_nulls_first",
  desc_nulls_last = "desc_nulls_last"
}

/**
 * @name profile
 * @type OBJECT
 */
export type profile = TypeData<t_profile>;

/**
 * @name profile_aggregate
 * @type OBJECT
 */
export type profile_aggregate = TypeData<t_profile_aggregate>;

/**
 * @name profile_aggregate_fields
 * @type OBJECT
 */
export type profile_aggregate_fields = TypeData<t_profile_aggregate_fields>;

/**
 * @name profile_avg_fields
 * @type OBJECT
 */
export type profile_avg_fields = TypeData<t_profile_avg_fields>;

/**
 * @name profile_constraint
 * @type ENUM
 */
export enum profile_constraint {
  profile_pkey = "profile_pkey"
}

/**
 * @name profile_max_fields
 * @type OBJECT
 */
export type profile_max_fields = TypeData<t_profile_max_fields>;

/**
 * @name profile_min_fields
 * @type OBJECT
 */
export type profile_min_fields = TypeData<t_profile_min_fields>;

/**
 * @name profile_mutation_response
 * @type OBJECT
 */
export type profile_mutation_response = TypeData<t_profile_mutation_response>;

/**
 * @name profile_select_column
 * @type ENUM
 */
export enum profile_select_column {
  id = "id",
  name = "name"
}

/**
 * @name profile_stddev_fields
 * @type OBJECT
 */
export type profile_stddev_fields = TypeData<t_profile_stddev_fields>;

/**
 * @name profile_stddev_pop_fields
 * @type OBJECT
 */
export type profile_stddev_pop_fields = TypeData<t_profile_stddev_pop_fields>;

/**
 * @name profile_stddev_samp_fields
 * @type OBJECT
 */
export type profile_stddev_samp_fields = TypeData<t_profile_stddev_samp_fields>;

/**
 * @name profile_sum_fields
 * @type OBJECT
 */
export type profile_sum_fields = TypeData<t_profile_sum_fields>;

/**
 * @name profile_update_column
 * @type ENUM
 */
export enum profile_update_column {
  id = "id",
  name = "name"
}

/**
 * @name profile_var_pop_fields
 * @type OBJECT
 */
export type profile_var_pop_fields = TypeData<t_profile_var_pop_fields>;

/**
 * @name profile_var_samp_fields
 * @type OBJECT
 */
export type profile_var_samp_fields = TypeData<t_profile_var_samp_fields>;

/**
 * @name profile_variance_fields
 * @type OBJECT
 */
export type profile_variance_fields = TypeData<t_profile_variance_fields>;

/**
 * @name query_root
 * @type OBJECT
 */
export type query_root = TypeData<t_query_root>;

/**
 * @name subscription_root
 * @type OBJECT
 */
export type subscription_root = TypeData<t_subscription_root>;
