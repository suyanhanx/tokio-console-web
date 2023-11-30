// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file common.proto (package rs.tokio.console.common, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";

/**
 * Unique identifier for each task.
 *
 * @generated from message rs.tokio.console.common.Id
 */
export class Id extends Message<Id> {
  /**
   * The unique identifier's concrete value.
   *
   * @generated from field: uint64 id = 1;
   */
  id = protoInt64.zero;

  constructor(data?: PartialMessage<Id>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rs.tokio.console.common.Id";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Id {
    return new Id().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Id {
    return new Id().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Id {
    return new Id().fromJsonString(jsonString, options);
  }

  static equals(a: Id | PlainMessage<Id> | undefined, b: Id | PlainMessage<Id> | undefined): boolean {
    return proto3.util.equals(Id, a, b);
  }
}

/**
 * A Rust source code location.
 *
 * @generated from message rs.tokio.console.common.Location
 */
export class Location extends Message<Location> {
  /**
   * The file path
   *
   * @generated from field: optional string file = 1;
   */
  file?: string;

  /**
   * The Rust module path
   *
   * @generated from field: optional string module_path = 2;
   */
  modulePath?: string;

  /**
   * The line number in the source code file.
   *
   * @generated from field: optional uint32 line = 3;
   */
  line?: number;

  /**
   * The character in `line`.
   *
   * @generated from field: optional uint32 column = 4;
   */
  column?: number;

  constructor(data?: PartialMessage<Location>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rs.tokio.console.common.Location";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "file", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "module_path", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "line", kind: "scalar", T: 13 /* ScalarType.UINT32 */, opt: true },
    { no: 4, name: "column", kind: "scalar", T: 13 /* ScalarType.UINT32 */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Location {
    return new Location().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Location {
    return new Location().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Location {
    return new Location().fromJsonString(jsonString, options);
  }

  static equals(a: Location | PlainMessage<Location> | undefined, b: Location | PlainMessage<Location> | undefined): boolean {
    return proto3.util.equals(Location, a, b);
  }
}

/**
 * Unique identifier for metadata.
 *
 * @generated from message rs.tokio.console.common.MetaId
 */
export class MetaId extends Message<MetaId> {
  /**
   * The unique identifier's concrete value.
   *
   * @generated from field: uint64 id = 1;
   */
  id = protoInt64.zero;

  constructor(data?: PartialMessage<MetaId>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rs.tokio.console.common.MetaId";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MetaId {
    return new MetaId().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MetaId {
    return new MetaId().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MetaId {
    return new MetaId().fromJsonString(jsonString, options);
  }

  static equals(a: MetaId | PlainMessage<MetaId> | undefined, b: MetaId | PlainMessage<MetaId> | undefined): boolean {
    return proto3.util.equals(MetaId, a, b);
  }
}

/**
 * Unique identifier for spans.
 *
 * @generated from message rs.tokio.console.common.SpanId
 */
export class SpanId extends Message<SpanId> {
  /**
   * The unique identifier's concrete value.
   *
   * @generated from field: uint64 id = 1;
   */
  id = protoInt64.zero;

  constructor(data?: PartialMessage<SpanId>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rs.tokio.console.common.SpanId";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SpanId {
    return new SpanId().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SpanId {
    return new SpanId().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SpanId {
    return new SpanId().fromJsonString(jsonString, options);
  }

  static equals(a: SpanId | PlainMessage<SpanId> | undefined, b: SpanId | PlainMessage<SpanId> | undefined): boolean {
    return proto3.util.equals(SpanId, a, b);
  }
}

/**
 * A message representing a key-value pair of data associated with a `Span`
 *
 * @generated from message rs.tokio.console.common.Field
 */
export class Field extends Message<Field> {
  /**
   * The key of the key-value pair.
   *
   * This is either represented as a string, or as an index into a `Metadata`'s 
   * array of field name strings.
   *
   * @generated from oneof rs.tokio.console.common.Field.name
   */
  name: {
    /**
     * The string representation of the name.
     *
     * @generated from field: string str_name = 1;
     */
    value: string;
    case: "strName";
  } | {
    /**
     * An index position into the `Metadata.field_names` of the metadata
     * for the task span that the field came from.
     *
     * @generated from field: uint64 name_idx = 2;
     */
    value: bigint;
    case: "nameIdx";
  } | { case: undefined; value?: undefined } = { case: undefined };

  /**
   * The value of the key-value pair.
   *
   * @generated from oneof rs.tokio.console.common.Field.value
   */
  value: {
    /**
     * A value serialized to a string using `fmt::Debug`.
     *
     * @generated from field: string debug_val = 3;
     */
    value: string;
    case: "debugVal";
  } | {
    /**
     * A string value.
     *
     * @generated from field: string str_val = 4;
     */
    value: string;
    case: "strVal";
  } | {
    /**
     * An unsigned integer value.
     *
     * @generated from field: uint64 u64_val = 5;
     */
    value: bigint;
    case: "u64Val";
  } | {
    /**
     * A signed integer value.
     *
     * @generated from field: sint64 i64_val = 6;
     */
    value: bigint;
    case: "i64Val";
  } | {
    /**
     * A boolean value.
     *
     * @generated from field: bool bool_val = 7;
     */
    value: boolean;
    case: "boolVal";
  } | { case: undefined; value?: undefined } = { case: undefined };

  /**
   * Metadata for the task span that the field came from.
   *
   * @generated from field: rs.tokio.console.common.MetaId metadata_id = 8;
   */
  metadataId?: MetaId;

  constructor(data?: PartialMessage<Field>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rs.tokio.console.common.Field";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "str_name", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "name" },
    { no: 2, name: "name_idx", kind: "scalar", T: 4 /* ScalarType.UINT64 */, oneof: "name" },
    { no: 3, name: "debug_val", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "value" },
    { no: 4, name: "str_val", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "value" },
    { no: 5, name: "u64_val", kind: "scalar", T: 4 /* ScalarType.UINT64 */, oneof: "value" },
    { no: 6, name: "i64_val", kind: "scalar", T: 18 /* ScalarType.SINT64 */, oneof: "value" },
    { no: 7, name: "bool_val", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "value" },
    { no: 8, name: "metadata_id", kind: "message", T: MetaId },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Field {
    return new Field().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Field {
    return new Field().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Field {
    return new Field().fromJsonString(jsonString, options);
  }

  static equals(a: Field | PlainMessage<Field> | undefined, b: Field | PlainMessage<Field> | undefined): boolean {
    return proto3.util.equals(Field, a, b);
  }
}

/**
 * Represents a period of time in which a program was executing in a particular context.
 *
 * Corresponds to `Span` in the `tracing` crate.
 *
 * @generated from message rs.tokio.console.common.Span
 */
export class Span extends Message<Span> {
  /**
   * An Id that uniquely identifies it in relation to other spans.
   *
   * @generated from field: rs.tokio.console.common.SpanId id = 1;
   */
  id?: SpanId;

  /**
   * Identifier for metadata describing static characteristics of all spans originating
   * from that callsite, such as its name, source code location, verbosity level, and
   * the names of its fields.
   *
   * @generated from field: rs.tokio.console.common.MetaId metadata_id = 2;
   */
  metadataId?: MetaId;

  /**
   * User-defined key-value pairs of arbitrary data that describe the context the span represents,
   *
   * @generated from field: repeated rs.tokio.console.common.Field fields = 3;
   */
  fields: Field[] = [];

  /**
   * Timestamp for the span.
   *
   * @generated from field: google.protobuf.Timestamp at = 4;
   */
  at?: Timestamp;

  constructor(data?: PartialMessage<Span>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rs.tokio.console.common.Span";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: SpanId },
    { no: 2, name: "metadata_id", kind: "message", T: MetaId },
    { no: 3, name: "fields", kind: "message", T: Field, repeated: true },
    { no: 4, name: "at", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Span {
    return new Span().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Span {
    return new Span().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Span {
    return new Span().fromJsonString(jsonString, options);
  }

  static equals(a: Span | PlainMessage<Span> | undefined, b: Span | PlainMessage<Span> | undefined): boolean {
    return proto3.util.equals(Span, a, b);
  }
}

/**
 * Any new metadata that was registered since the last update.
 *
 * @generated from message rs.tokio.console.common.RegisterMetadata
 */
export class RegisterMetadata extends Message<RegisterMetadata> {
  /**
   * The new metadata that was registered since the last update.
   *
   * @generated from field: repeated rs.tokio.console.common.RegisterMetadata.NewMetadata metadata = 1;
   */
  metadata: RegisterMetadata_NewMetadata[] = [];

  constructor(data?: PartialMessage<RegisterMetadata>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rs.tokio.console.common.RegisterMetadata";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "metadata", kind: "message", T: RegisterMetadata_NewMetadata, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RegisterMetadata {
    return new RegisterMetadata().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RegisterMetadata {
    return new RegisterMetadata().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RegisterMetadata {
    return new RegisterMetadata().fromJsonString(jsonString, options);
  }

  static equals(a: RegisterMetadata | PlainMessage<RegisterMetadata> | undefined, b: RegisterMetadata | PlainMessage<RegisterMetadata> | undefined): boolean {
    return proto3.util.equals(RegisterMetadata, a, b);
  }
}

/**
 * One metadata element registered since the last update.
 *
 * @generated from message rs.tokio.console.common.RegisterMetadata.NewMetadata
 */
export class RegisterMetadata_NewMetadata extends Message<RegisterMetadata_NewMetadata> {
  /**
   * Unique identifier for `metadata`.
   *
   * @generated from field: rs.tokio.console.common.MetaId id = 1;
   */
  id?: MetaId;

  /**
   * The metadata payload.
   *
   * @generated from field: rs.tokio.console.common.Metadata metadata = 2;
   */
  metadata?: Metadata;

  constructor(data?: PartialMessage<RegisterMetadata_NewMetadata>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rs.tokio.console.common.RegisterMetadata.NewMetadata";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: MetaId },
    { no: 2, name: "metadata", kind: "message", T: Metadata },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RegisterMetadata_NewMetadata {
    return new RegisterMetadata_NewMetadata().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RegisterMetadata_NewMetadata {
    return new RegisterMetadata_NewMetadata().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RegisterMetadata_NewMetadata {
    return new RegisterMetadata_NewMetadata().fromJsonString(jsonString, options);
  }

  static equals(a: RegisterMetadata_NewMetadata | PlainMessage<RegisterMetadata_NewMetadata> | undefined, b: RegisterMetadata_NewMetadata | PlainMessage<RegisterMetadata_NewMetadata> | undefined): boolean {
    return proto3.util.equals(RegisterMetadata_NewMetadata, a, b);
  }
}

/**
 * Metadata associated with a span or event.
 *
 * @generated from message rs.tokio.console.common.Metadata
 */
export class Metadata extends Message<Metadata> {
  /**
   * The name of the span or event.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * Describes the part of the system where the span or event that this
   * metadata describes occurred.
   *
   * @generated from field: string target = 2;
   */
  target = "";

  /**
   * The path to the Rust module where the span occurred.
   *
   * @generated from field: string module_path = 3;
   */
  modulePath = "";

  /**
   * The Rust source location associated with the span or event.
   *
   * @generated from field: rs.tokio.console.common.Location location = 4;
   */
  location?: Location;

  /**
   * Indicates whether metadata is associated with a span or with an event.
   *
   * @generated from field: rs.tokio.console.common.Metadata.Kind kind = 5;
   */
  kind = Metadata_Kind.SPAN;

  /**
   * Describes the level of verbosity of a span or event.
   *
   * @generated from field: rs.tokio.console.common.Metadata.Level level = 6;
   */
  level = Metadata_Level.ERROR;

  /**
   * The names of the key-value fields attached to the
   * span or event this metadata is associated with.
   *
   * @generated from field: repeated string field_names = 7;
   */
  fieldNames: string[] = [];

  constructor(data?: PartialMessage<Metadata>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rs.tokio.console.common.Metadata";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "target", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "module_path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "location", kind: "message", T: Location },
    { no: 5, name: "kind", kind: "enum", T: proto3.getEnumType(Metadata_Kind) },
    { no: 6, name: "level", kind: "enum", T: proto3.getEnumType(Metadata_Level) },
    { no: 7, name: "field_names", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Metadata {
    return new Metadata().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Metadata {
    return new Metadata().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Metadata {
    return new Metadata().fromJsonString(jsonString, options);
  }

  static equals(a: Metadata | PlainMessage<Metadata> | undefined, b: Metadata | PlainMessage<Metadata> | undefined): boolean {
    return proto3.util.equals(Metadata, a, b);
  }
}

/**
 * Indicates whether metadata is associated with a span or with an event.
 *
 * @generated from enum rs.tokio.console.common.Metadata.Kind
 */
export enum Metadata_Kind {
  /**
   * Indicates metadata is associated with a span.
   *
   * @generated from enum value: SPAN = 0;
   */
  SPAN = 0,

  /**
   * Indicates metadata is associated with an event.
   *
   * @generated from enum value: EVENT = 1;
   */
  EVENT = 1,
}
// Retrieve enum metadata with: proto3.getEnumType(Metadata_Kind)
proto3.util.setEnumType(Metadata_Kind, "rs.tokio.console.common.Metadata.Kind", [
  { no: 0, name: "SPAN" },
  { no: 1, name: "EVENT" },
]);

/**
 * Describes the level of verbosity of a span or event.
 *
 * Corresponds to `Level` in the `tracing` crate.
 *
 * @generated from enum rs.tokio.console.common.Metadata.Level
 */
export enum Metadata_Level {
  /**
   * The "error" level.
   *
   * Designates very serious errors.
   *
   * @generated from enum value: ERROR = 0;
   */
  ERROR = 0,

  /**
   * The "warn" level.
   *
   * Designates hazardous situations.
   *
   * @generated from enum value: WARN = 1;
   */
  WARN = 1,

  /**
   * The "info" level.
   * Designates useful information.
   *
   * @generated from enum value: INFO = 2;
   */
  INFO = 2,

  /**
   * The "debug" level.
   *
   * Designates lower priority information.
   *
   * @generated from enum value: DEBUG = 3;
   */
  DEBUG = 3,

  /**
   * The "trace" level.
   *
   * Designates very low priority, often extremely verbose, information.
   *
   * @generated from enum value: TRACE = 4;
   */
  TRACE = 4,
}
// Retrieve enum metadata with: proto3.getEnumType(Metadata_Level)
proto3.util.setEnumType(Metadata_Level, "rs.tokio.console.common.Metadata.Level", [
  { no: 0, name: "ERROR" },
  { no: 1, name: "WARN" },
  { no: 2, name: "INFO" },
  { no: 3, name: "DEBUG" },
  { no: 4, name: "TRACE" },
]);

/**
 * Contains stats about objects that can be polled. Currently these can be:
 * - tasks that have been spawned
 * - async operations on resources that are performed within the context of a task
 *
 * @generated from message rs.tokio.console.common.PollStats
 */
export class PollStats extends Message<PollStats> {
  /**
   * The total number of times this object has been polled.
   *
   * @generated from field: uint64 polls = 1;
   */
  polls = protoInt64.zero;

  /**
   * The timestamp of the first time this object was polled.
   *
   * If this is `None`, the object has not yet been polled.
   *
   * Subtracting this timestamp from `created_at` can be used to calculate the
   * time to first poll for this object, a measurement of executor latency.
   *
   * @generated from field: optional google.protobuf.Timestamp first_poll = 3;
   */
  firstPoll?: Timestamp;

  /**
   * The timestamp of the most recent time this objects's poll method was invoked.
   *
   * If this is `None`, the object has not yet been polled.
   *
   * If the object has only been polled a single time, then this value may be
   * equal to the `first_poll` timestamp.
   *
   *
   * @generated from field: optional google.protobuf.Timestamp last_poll_started = 4;
   */
  lastPollStarted?: Timestamp;

  /**
   * The timestamp of the most recent time this objects's poll method finished execution.
   *
   * If this is `None`, the object has not yet been polled or is currently being polled.
   *
   * If the object does not exist anymore, then this is the time the final invocation of
   * its poll method has completed.
   *
   * @generated from field: optional google.protobuf.Timestamp last_poll_ended = 5;
   */
  lastPollEnded?: Timestamp;

  /**
   * The total duration this object was being *actively polled*, summed across
   * all polls.
   *
   * Note that this includes only polls that have completed, and does not
   * reflect any in-progress polls. Subtracting `busy_time` from the
   * total lifetime of the polled object results in the amount of time it
   * has spent *waiting* to be polled (including the `scheduled_time` value
   * from `TaskStats`, if this is a task).
   *
   * @generated from field: google.protobuf.Duration busy_time = 6;
   */
  busyTime?: Duration;

  constructor(data?: PartialMessage<PollStats>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rs.tokio.console.common.PollStats";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "polls", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "first_poll", kind: "message", T: Timestamp, opt: true },
    { no: 4, name: "last_poll_started", kind: "message", T: Timestamp, opt: true },
    { no: 5, name: "last_poll_ended", kind: "message", T: Timestamp, opt: true },
    { no: 6, name: "busy_time", kind: "message", T: Duration },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PollStats {
    return new PollStats().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PollStats {
    return new PollStats().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PollStats {
    return new PollStats().fromJsonString(jsonString, options);
  }

  static equals(a: PollStats | PlainMessage<PollStats> | undefined, b: PollStats | PlainMessage<PollStats> | undefined): boolean {
    return proto3.util.equals(PollStats, a, b);
  }
}

/**
 * State attributes of an entity. These are dependent on the type of the entity.
 *
 * For example, a timer resource will have a duration, while a semaphore resource may
 * have a permit count. Likewise, the async ops of a semaphore may have attributes
 * indicating how many permits they are trying to acquire vs how many are acquired.
 * These values may change over time. Therefore, they live in the runtime stats rather
 * than the static data describing the entity.
 *
 * @generated from message rs.tokio.console.common.Attribute
 */
export class Attribute extends Message<Attribute> {
  /**
   * The key-value pair for the attribute
   *
   * @generated from field: rs.tokio.console.common.Field field = 1;
   */
  field?: Field;

  /**
   * Some values carry a unit of measurement. For example, a duration
   * carries an associated unit of time, such as "ms" for milliseconds.
   *
   * @generated from field: optional string unit = 2;
   */
  unit?: string;

  constructor(data?: PartialMessage<Attribute>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rs.tokio.console.common.Attribute";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "field", kind: "message", T: Field },
    { no: 2, name: "unit", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Attribute {
    return new Attribute().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Attribute {
    return new Attribute().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Attribute {
    return new Attribute().fromJsonString(jsonString, options);
  }

  static equals(a: Attribute | PlainMessage<Attribute> | undefined, b: Attribute | PlainMessage<Attribute> | undefined): boolean {
    return proto3.util.equals(Attribute, a, b);
  }
}

