// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file async_ops.proto (package rs.tokio.console.async_ops, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";
import { Attribute, Id, MetaId, PollStats } from "./common_pb.js";

/**
 * An `AsyncOp` state update.
 *
 * This includes a list of any new async ops, and updates to the associated statistics
 * for any async ops that have changed since the last update.
 *
 * @generated from message rs.tokio.console.async_ops.AsyncOpUpdate
 */
export class AsyncOpUpdate extends Message<AsyncOpUpdate> {
  /**
   * A list of new async operations that were created since the last `AsyncOpUpdate`
   * was sent. Note that the fact that an async operation has been created
   * does not mean that is has been polled or is being polled. This information
   * is reflected in the `Stats` of the operation.
   *
   * @generated from field: repeated rs.tokio.console.async_ops.AsyncOp new_async_ops = 1;
   */
  newAsyncOps: AsyncOp[] = [];

  /**
   * Any async op stats that have changed since the last update.
   *
   * @generated from field: map<uint64, rs.tokio.console.async_ops.Stats> stats_update = 2;
   */
  statsUpdate: { [key: string]: Stats } = {};

  /**
   * A count of how many async op events (e.g. polls, creation, etc) were not
   * recorded because the application's event buffer was at capacity.
   *
   * If everything is working normally, this should be 0. If it is greater
   * than 0, that may indicate that some data is missing from this update, and
   * it may be necessary to increase the number of events buffered by the
   * application to ensure that data loss is avoided.
   *
   * If the application's instrumentation ensures reliable delivery of events,
   * this will always be 0.
   *
   * @generated from field: uint64 dropped_events = 3;
   */
  droppedEvents = protoInt64.zero;

  constructor(data?: PartialMessage<AsyncOpUpdate>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rs.tokio.console.async_ops.AsyncOpUpdate";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "new_async_ops", kind: "message", T: AsyncOp, repeated: true },
    { no: 2, name: "stats_update", kind: "map", K: 4 /* ScalarType.UINT64 */, V: {kind: "message", T: Stats} },
    { no: 3, name: "dropped_events", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AsyncOpUpdate {
    return new AsyncOpUpdate().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AsyncOpUpdate {
    return new AsyncOpUpdate().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AsyncOpUpdate {
    return new AsyncOpUpdate().fromJsonString(jsonString, options);
  }

  static equals(a: AsyncOpUpdate | PlainMessage<AsyncOpUpdate> | undefined, b: AsyncOpUpdate | PlainMessage<AsyncOpUpdate> | undefined): boolean {
    return proto3.util.equals(AsyncOpUpdate, a, b);
  }
}

/**
 * An async operation.
 *
 * An async operation is an operation that is associated with a resource
 * This could, for example, be a read or write on a TCP stream, or a receive operation on
 * a channel.
 *
 * @generated from message rs.tokio.console.async_ops.AsyncOp
 */
export class AsyncOp extends Message<AsyncOp> {
  /**
   * The async op's ID.
   *
   * This uniquely identifies this op across all *currently live*
   * ones.
   *
   * @generated from field: rs.tokio.console.common.Id id = 1;
   */
  id?: Id;

  /**
   * The numeric ID of the op's `Metadata`.
   *
   * This identifies the `Metadata` that describes the `tracing` span
   * corresponding to this async op. The metadata for this ID will have been sent
   * in a prior `RegisterMetadata` message.
   *
   * @generated from field: rs.tokio.console.common.MetaId metadata = 2;
   */
  metadata?: MetaId;

  /**
   * The source of this async operation. Most commonly this should be the name
   * of the method where the instantiation of this op has happened.
   *
   * @generated from field: string source = 3;
   */
  source = "";

  /**
   * The ID of the parent async op.
   *
   * This field is only set if this async op was created while inside of another
   * async op.  For example, `tokio::sync`'s `Mutex::lock` internally calls
   * `Semaphore::acquire`.
   *
   * This field can be empty; if it is empty, this async op is not a child of another
   * async op.
   *
   * @generated from field: rs.tokio.console.common.Id parent_async_op_id = 4;
   */
  parentAsyncOpId?: Id;

  /**
   * The resources's ID.
   *
   * @generated from field: rs.tokio.console.common.Id resource_id = 5;
   */
  resourceId?: Id;

  constructor(data?: PartialMessage<AsyncOp>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rs.tokio.console.async_ops.AsyncOp";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: Id },
    { no: 2, name: "metadata", kind: "message", T: MetaId },
    { no: 3, name: "source", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "parent_async_op_id", kind: "message", T: Id },
    { no: 5, name: "resource_id", kind: "message", T: Id },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AsyncOp {
    return new AsyncOp().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AsyncOp {
    return new AsyncOp().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AsyncOp {
    return new AsyncOp().fromJsonString(jsonString, options);
  }

  static equals(a: AsyncOp | PlainMessage<AsyncOp> | undefined, b: AsyncOp | PlainMessage<AsyncOp> | undefined): boolean {
    return proto3.util.equals(AsyncOp, a, b);
  }
}

/**
 * Statistics associated with a given async operation.
 *
 * @generated from message rs.tokio.console.async_ops.Stats
 */
export class Stats extends Message<Stats> {
  /**
   * Timestamp of when the async op has been created.
   *
   * @generated from field: google.protobuf.Timestamp created_at = 1;
   */
  createdAt?: Timestamp;

  /**
   * Timestamp of when the async op was dropped.
   *
   * @generated from field: google.protobuf.Timestamp dropped_at = 2;
   */
  droppedAt?: Timestamp;

  /**
   * The Id of the task that is awaiting on this op.
   *
   * @generated from field: rs.tokio.console.common.Id task_id = 4;
   */
  taskId?: Id;

  /**
   * Contains the operation poll stats.
   *
   * @generated from field: rs.tokio.console.common.PollStats poll_stats = 5;
   */
  pollStats?: PollStats;

  /**
   * State attributes of the async op.
   *
   * @generated from field: repeated rs.tokio.console.common.Attribute attributes = 6;
   */
  attributes: Attribute[] = [];

  constructor(data?: PartialMessage<Stats>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rs.tokio.console.async_ops.Stats";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "created_at", kind: "message", T: Timestamp },
    { no: 2, name: "dropped_at", kind: "message", T: Timestamp },
    { no: 4, name: "task_id", kind: "message", T: Id },
    { no: 5, name: "poll_stats", kind: "message", T: PollStats },
    { no: 6, name: "attributes", kind: "message", T: Attribute, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Stats {
    return new Stats().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Stats {
    return new Stats().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Stats {
    return new Stats().fromJsonString(jsonString, options);
  }

  static equals(a: Stats | PlainMessage<Stats> | undefined, b: Stats | PlainMessage<Stats> | undefined): boolean {
    return proto3.util.equals(Stats, a, b);
  }
}

