// @ts-nocheck
import * as extensions from "../extensions";
import { lazyGetters } from "@gqless/utils";
import {
  ScalarNode,
  InputNode,
  InputNodeField,
  ArrayNode,
  ObjectNode,
  FieldNode,
  EnumNode,
  Arguments,
  ArgumentsField
} from "gqless";

export const schema = {
  get Boolean() {
    return new ScalarNode({
      name: "Boolean",
      extension: ((extensions as any) || {}).Boolean
    });
  },
  get Float() {
    return new ScalarNode({
      name: "Float",
      extension: ((extensions as any) || {}).Float
    });
  },
  get ID() {
    return new ScalarNode({
      name: "ID",
      extension: ((extensions as any) || {}).ID
    });
  },
  get Int() {
    return new ScalarNode({
      name: "Int",
      extension: ((extensions as any) || {}).Int
    });
  },
  get Int_comparison_exp() {
    return new InputNode(
      {
        get _eq() {
          return new InputNodeField(schema.Int, true);
        },
        get _gt() {
          return new InputNodeField(schema.Int, true);
        },
        get _gte() {
          return new InputNodeField(schema.Int, true);
        },
        get _in() {
          return new InputNodeField(new ArrayNode(schema.Int, true), true);
        },
        get _is_null() {
          return new InputNodeField(schema.Boolean, true);
        },
        get _lt() {
          return new InputNodeField(schema.Int, true);
        },
        get _lte() {
          return new InputNodeField(schema.Int, true);
        },
        get _neq() {
          return new InputNodeField(schema.Int, true);
        },
        get _nin() {
          return new InputNodeField(new ArrayNode(schema.Int, true), true);
        }
      },
      { name: "Int_comparison_exp" }
    );
  },
  get String() {
    return new ScalarNode({
      name: "String",
      extension: ((extensions as any) || {}).String
    });
  },
  get String_comparison_exp() {
    return new InputNode(
      {
        get _eq() {
          return new InputNodeField(schema.String, true);
        },
        get _gt() {
          return new InputNodeField(schema.String, true);
        },
        get _gte() {
          return new InputNodeField(schema.String, true);
        },
        get _ilike() {
          return new InputNodeField(schema.String, true);
        },
        get _in() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get _is_null() {
          return new InputNodeField(schema.Boolean, true);
        },
        get _like() {
          return new InputNodeField(schema.String, true);
        },
        get _lt() {
          return new InputNodeField(schema.String, true);
        },
        get _lte() {
          return new InputNodeField(schema.String, true);
        },
        get _neq() {
          return new InputNodeField(schema.String, true);
        },
        get _nilike() {
          return new InputNodeField(schema.String, true);
        },
        get _nin() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get _nlike() {
          return new InputNodeField(schema.String, true);
        },
        get _nsimilar() {
          return new InputNodeField(schema.String, true);
        },
        get _similar() {
          return new InputNodeField(schema.String, true);
        }
      },
      { name: "String_comparison_exp" }
    );
  },
  get __Directive() {
    return new ObjectNode(
      {
        get args() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, false),
            undefined,
            false
          );
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get locations() {
          return new FieldNode(
            new ArrayNode(schema.__DirectiveLocation, false),
            undefined,
            false
          );
        },
        get name() {
          return new FieldNode(schema.String, undefined, false);
        }
      },
      {
        name: "__Directive",
        extension: ((extensions as any) || {}).__Directive
      }
    );
  },
  get __DirectiveLocation() {
    return new EnumNode({ name: "__DirectiveLocation" });
  },
  get __EnumValue() {
    return new ObjectNode(
      {
        get deprecationReason() {
          return new FieldNode(schema.String, undefined, true);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get isDeprecated() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get name() {
          return new FieldNode(schema.String, undefined, false);
        }
      },
      {
        name: "__EnumValue",
        extension: ((extensions as any) || {}).__EnumValue
      }
    );
  },
  get __Field() {
    return new ObjectNode(
      {
        get args() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, false),
            undefined,
            false
          );
        },
        get deprecationReason() {
          return new FieldNode(schema.String, undefined, true);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get isDeprecated() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get type() {
          return new FieldNode(schema.__Type, undefined, false);
        }
      },
      { name: "__Field", extension: ((extensions as any) || {}).__Field }
    );
  },
  get __InputValue() {
    return new ObjectNode(
      {
        get defaultValue() {
          return new FieldNode(schema.String, undefined, true);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get type() {
          return new FieldNode(schema.__Type, undefined, false);
        }
      },
      {
        name: "__InputValue",
        extension: ((extensions as any) || {}).__InputValue
      }
    );
  },
  get __Schema() {
    return new ObjectNode(
      {
        get directives() {
          return new FieldNode(
            new ArrayNode(schema.__Directive, false),
            undefined,
            false
          );
        },
        get mutationType() {
          return new FieldNode(schema.__Type, undefined, true);
        },
        get queryType() {
          return new FieldNode(schema.__Type, undefined, false);
        },
        get subscriptionType() {
          return new FieldNode(schema.__Type, undefined, true);
        },
        get types() {
          return new FieldNode(
            new ArrayNode(schema.__Type, false),
            undefined,
            false
          );
        }
      },
      { name: "__Schema", extension: ((extensions as any) || {}).__Schema }
    );
  },
  get __Type() {
    return new ObjectNode(
      {
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get enumValues() {
          return new FieldNode(
            new ArrayNode(schema.__EnumValue, true),
            new Arguments({
              get includeDeprecated() {
                return new ArgumentsField(schema.Boolean, true);
              }
            }),
            true
          );
        },
        get fields() {
          return new FieldNode(
            new ArrayNode(schema.__Field, true),
            new Arguments({
              get includeDeprecated() {
                return new ArgumentsField(schema.Boolean, true);
              }
            }),
            true
          );
        },
        get inputFields() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, true),
            undefined,
            true
          );
        },
        get interfaces() {
          return new FieldNode(
            new ArrayNode(schema.__Type, true),
            undefined,
            true
          );
        },
        get kind() {
          return new FieldNode(schema.__TypeKind, undefined, false);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        },
        get ofType() {
          return new FieldNode(schema.__Type, undefined, true);
        },
        get possibleTypes() {
          return new FieldNode(
            new ArrayNode(schema.__Type, true),
            undefined,
            true
          );
        }
      },
      { name: "__Type", extension: ((extensions as any) || {}).__Type }
    );
  },
  get __TypeKind() {
    return new EnumNode({ name: "__TypeKind" });
  },
  get mutation_root() {
    return new ObjectNode(
      {
        get delete_profile() {
          return new FieldNode(
            schema.profile_mutation_response,
            new Arguments(
              {
                get where() {
                  return new ArgumentsField(schema.profile_bool_exp, false);
                }
              },
              true
            ),
            true
          );
        },
        get delete_profile_by_pk() {
          return new FieldNode(
            schema.profile,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                }
              },
              true
            ),
            true
          );
        },
        get insert_profile() {
          return new FieldNode(
            schema.profile_mutation_response,
            new Arguments({
              get objects() {
                return new ArgumentsField(
                  new ArrayNode(schema.profile_insert_input, false),
                  false
                );
              },
              get on_conflict() {
                return new ArgumentsField(schema.profile_on_conflict, true);
              }
            }),
            true
          );
        },
        get insert_profile_one() {
          return new FieldNode(
            schema.profile,
            new Arguments({
              get object() {
                return new ArgumentsField(schema.profile_insert_input, false);
              },
              get on_conflict() {
                return new ArgumentsField(schema.profile_on_conflict, true);
              }
            }),
            true
          );
        },
        get update_profile() {
          return new FieldNode(
            schema.profile_mutation_response,
            new Arguments({
              get _inc() {
                return new ArgumentsField(schema.profile_inc_input, true);
              },
              get _set() {
                return new ArgumentsField(schema.profile_set_input, true);
              },
              get where() {
                return new ArgumentsField(schema.profile_bool_exp, false);
              }
            }),
            true
          );
        },
        get update_profile_by_pk() {
          return new FieldNode(
            schema.profile,
            new Arguments({
              get _inc() {
                return new ArgumentsField(schema.profile_inc_input, true);
              },
              get _set() {
                return new ArgumentsField(schema.profile_set_input, true);
              },
              get pk_columns() {
                return new ArgumentsField(
                  schema.profile_pk_columns_input,
                  false
                );
              }
            }),
            true
          );
        }
      },
      {
        name: "mutation_root",
        extension: ((extensions as any) || {}).mutation_root
      }
    );
  },
  get order_by() {
    return new EnumNode({ name: "order_by" });
  },
  get profile() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get name() {
          return new FieldNode(schema.String, undefined, false);
        }
      },
      { name: "profile", extension: ((extensions as any) || {}).profile }
    );
  },
  get profile_aggregate() {
    return new ObjectNode(
      {
        get aggregate() {
          return new FieldNode(
            schema.profile_aggregate_fields,
            undefined,
            true
          );
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.profile, false),
            undefined,
            false
          );
        }
      },
      {
        name: "profile_aggregate",
        extension: ((extensions as any) || {}).profile_aggregate
      }
    );
  },
  get profile_aggregate_fields() {
    return new ObjectNode(
      {
        get avg() {
          return new FieldNode(schema.profile_avg_fields, undefined, true);
        },
        get count() {
          return new FieldNode(
            schema.Int,
            new Arguments({
              get columns() {
                return new ArgumentsField(
                  new ArrayNode(schema.profile_select_column, true),
                  true
                );
              },
              get distinct() {
                return new ArgumentsField(schema.Boolean, true);
              }
            }),
            true
          );
        },
        get max() {
          return new FieldNode(schema.profile_max_fields, undefined, true);
        },
        get min() {
          return new FieldNode(schema.profile_min_fields, undefined, true);
        },
        get stddev() {
          return new FieldNode(schema.profile_stddev_fields, undefined, true);
        },
        get stddev_pop() {
          return new FieldNode(
            schema.profile_stddev_pop_fields,
            undefined,
            true
          );
        },
        get stddev_samp() {
          return new FieldNode(
            schema.profile_stddev_samp_fields,
            undefined,
            true
          );
        },
        get sum() {
          return new FieldNode(schema.profile_sum_fields, undefined, true);
        },
        get var_pop() {
          return new FieldNode(schema.profile_var_pop_fields, undefined, true);
        },
        get var_samp() {
          return new FieldNode(schema.profile_var_samp_fields, undefined, true);
        },
        get variance() {
          return new FieldNode(schema.profile_variance_fields, undefined, true);
        }
      },
      {
        name: "profile_aggregate_fields",
        extension: ((extensions as any) || {}).profile_aggregate_fields
      }
    );
  },
  get profile_aggregate_order_by() {
    return new InputNode(
      {
        get avg() {
          return new InputNodeField(schema.profile_avg_order_by, true);
        },
        get count() {
          return new InputNodeField(schema.order_by, true);
        },
        get max() {
          return new InputNodeField(schema.profile_max_order_by, true);
        },
        get min() {
          return new InputNodeField(schema.profile_min_order_by, true);
        },
        get stddev() {
          return new InputNodeField(schema.profile_stddev_order_by, true);
        },
        get stddev_pop() {
          return new InputNodeField(schema.profile_stddev_pop_order_by, true);
        },
        get stddev_samp() {
          return new InputNodeField(schema.profile_stddev_samp_order_by, true);
        },
        get sum() {
          return new InputNodeField(schema.profile_sum_order_by, true);
        },
        get var_pop() {
          return new InputNodeField(schema.profile_var_pop_order_by, true);
        },
        get var_samp() {
          return new InputNodeField(schema.profile_var_samp_order_by, true);
        },
        get variance() {
          return new InputNodeField(schema.profile_variance_order_by, true);
        }
      },
      { name: "profile_aggregate_order_by" }
    );
  },
  get profile_arr_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(
            new ArrayNode(schema.profile_insert_input, false),
            false
          );
        },
        get on_conflict() {
          return new InputNodeField(schema.profile_on_conflict, true);
        }
      },
      { name: "profile_arr_rel_insert_input" }
    );
  },
  get profile_avg_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        }
      },
      {
        name: "profile_avg_fields",
        extension: ((extensions as any) || {}).profile_avg_fields
      }
    );
  },
  get profile_avg_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "profile_avg_order_by" }
    );
  },
  get profile_bool_exp() {
    return new InputNode(
      {
        get _and() {
          return new InputNodeField(
            new ArrayNode(schema.profile_bool_exp, true),
            true
          );
        },
        get _not() {
          return new InputNodeField(schema.profile_bool_exp, true);
        },
        get _or() {
          return new InputNodeField(
            new ArrayNode(schema.profile_bool_exp, true),
            true
          );
        },
        get id() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
        get name() {
          return new InputNodeField(schema.String_comparison_exp, true);
        }
      },
      { name: "profile_bool_exp" }
    );
  },
  get profile_constraint() {
    return new EnumNode({ name: "profile_constraint" });
  },
  get profile_inc_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, true);
        }
      },
      { name: "profile_inc_input" }
    );
  },
  get profile_insert_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get name() {
          return new InputNodeField(schema.String, true);
        }
      },
      { name: "profile_insert_input" }
    );
  },
  get profile_max_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      {
        name: "profile_max_fields",
        extension: ((extensions as any) || {}).profile_max_fields
      }
    );
  },
  get profile_max_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get name() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "profile_max_order_by" }
    );
  },
  get profile_min_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      {
        name: "profile_min_fields",
        extension: ((extensions as any) || {}).profile_min_fields
      }
    );
  },
  get profile_min_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get name() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "profile_min_order_by" }
    );
  },
  get profile_mutation_response() {
    return new ObjectNode(
      {
        get affected_rows() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get returning() {
          return new FieldNode(
            new ArrayNode(schema.profile, false),
            undefined,
            false
          );
        }
      },
      {
        name: "profile_mutation_response",
        extension: ((extensions as any) || {}).profile_mutation_response
      }
    );
  },
  get profile_obj_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(schema.profile_insert_input, false);
        },
        get on_conflict() {
          return new InputNodeField(schema.profile_on_conflict, true);
        }
      },
      { name: "profile_obj_rel_insert_input" }
    );
  },
  get profile_on_conflict() {
    return new InputNode(
      {
        get constraint() {
          return new InputNodeField(schema.profile_constraint, false);
        },
        get update_columns() {
          return new InputNodeField(
            new ArrayNode(schema.profile_update_column, false),
            false
          );
        },
        get where() {
          return new InputNodeField(schema.profile_bool_exp, true);
        }
      },
      { name: "profile_on_conflict" }
    );
  },
  get profile_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get name() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "profile_order_by" }
    );
  },
  get profile_pk_columns_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, false);
        }
      },
      { name: "profile_pk_columns_input" }
    );
  },
  get profile_select_column() {
    return new EnumNode({ name: "profile_select_column" });
  },
  get profile_set_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get name() {
          return new InputNodeField(schema.String, true);
        }
      },
      { name: "profile_set_input" }
    );
  },
  get profile_stddev_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        }
      },
      {
        name: "profile_stddev_fields",
        extension: ((extensions as any) || {}).profile_stddev_fields
      }
    );
  },
  get profile_stddev_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "profile_stddev_order_by" }
    );
  },
  get profile_stddev_pop_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        }
      },
      {
        name: "profile_stddev_pop_fields",
        extension: ((extensions as any) || {}).profile_stddev_pop_fields
      }
    );
  },
  get profile_stddev_pop_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "profile_stddev_pop_order_by" }
    );
  },
  get profile_stddev_samp_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        }
      },
      {
        name: "profile_stddev_samp_fields",
        extension: ((extensions as any) || {}).profile_stddev_samp_fields
      }
    );
  },
  get profile_stddev_samp_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "profile_stddev_samp_order_by" }
    );
  },
  get profile_sum_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        }
      },
      {
        name: "profile_sum_fields",
        extension: ((extensions as any) || {}).profile_sum_fields
      }
    );
  },
  get profile_sum_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "profile_sum_order_by" }
    );
  },
  get profile_update_column() {
    return new EnumNode({ name: "profile_update_column" });
  },
  get profile_var_pop_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        }
      },
      {
        name: "profile_var_pop_fields",
        extension: ((extensions as any) || {}).profile_var_pop_fields
      }
    );
  },
  get profile_var_pop_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "profile_var_pop_order_by" }
    );
  },
  get profile_var_samp_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        }
      },
      {
        name: "profile_var_samp_fields",
        extension: ((extensions as any) || {}).profile_var_samp_fields
      }
    );
  },
  get profile_var_samp_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "profile_var_samp_order_by" }
    );
  },
  get profile_variance_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        }
      },
      {
        name: "profile_variance_fields",
        extension: ((extensions as any) || {}).profile_variance_fields
      }
    );
  },
  get profile_variance_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "profile_variance_order_by" }
    );
  },
  get query_root() {
    return new ObjectNode(
      {
        get profile() {
          return new FieldNode(
            new ArrayNode(schema.profile, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.profile_select_column, true),
                  true
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.profile_order_by, true),
                  true
                );
              },
              get where() {
                return new ArgumentsField(schema.profile_bool_exp, true);
              }
            }),
            false
          );
        },
        get profile_aggregate() {
          return new FieldNode(
            schema.profile_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.profile_select_column, true),
                  true
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.profile_order_by, true),
                  true
                );
              },
              get where() {
                return new ArgumentsField(schema.profile_bool_exp, true);
              }
            }),
            false
          );
        },
        get profile_by_pk() {
          return new FieldNode(
            schema.profile,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                }
              },
              true
            ),
            true
          );
        }
      },
      { name: "query_root", extension: ((extensions as any) || {}).query_root }
    );
  },
  get subscription_root() {
    return new ObjectNode(
      {
        get profile() {
          return new FieldNode(
            new ArrayNode(schema.profile, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.profile_select_column, true),
                  true
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.profile_order_by, true),
                  true
                );
              },
              get where() {
                return new ArgumentsField(schema.profile_bool_exp, true);
              }
            }),
            false
          );
        },
        get profile_aggregate() {
          return new FieldNode(
            schema.profile_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.profile_select_column, true),
                  true
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.profile_order_by, true),
                  true
                );
              },
              get where() {
                return new ArgumentsField(schema.profile_bool_exp, true);
              }
            }),
            false
          );
        },
        get profile_by_pk() {
          return new FieldNode(
            schema.profile,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                }
              },
              true
            ),
            true
          );
        }
      },
      {
        name: "subscription_root",
        extension: ((extensions as any) || {}).subscription_root
      }
    );
  }
};

lazyGetters(schema);
