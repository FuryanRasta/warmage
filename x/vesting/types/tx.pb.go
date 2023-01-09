// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: warmage/vesting/v1/tx.proto

package types

import (
	context "context"
	fmt "fmt"
	_ "github.com/gogo/protobuf/gogoproto"
	grpc1 "github.com/gogo/protobuf/grpc"
	proto "github.com/gogo/protobuf/proto"
	_ "google.golang.org/genproto/googleapis/api/annotations"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

// MsgAddAirdrops represents a message to add airdrop targets.
type MsgAddAirdrops struct {
	Sender   string    `protobuf:"bytes,1,opt,name=sender,proto3" json:"sender,omitempty"`
	Airdrops []Airdrop `protobuf:"bytes,2,rep,name=airdrops,proto3" json:"airdrops"`
}

func (m *MsgAddAirdrops) Reset()         { *m = MsgAddAirdrops{} }
func (m *MsgAddAirdrops) String() string { return proto.CompactTextString(m) }
func (*MsgAddAirdrops) ProtoMessage()    {}
func (*MsgAddAirdrops) Descriptor() ([]byte, []int) {
	return fileDescriptor_7ff1dd0df923de90, []int{0}
}
func (m *MsgAddAirdrops) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgAddAirdrops) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgAddAirdrops.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgAddAirdrops) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgAddAirdrops.Merge(m, src)
}
func (m *MsgAddAirdrops) XXX_Size() int {
	return m.Size()
}
func (m *MsgAddAirdrops) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgAddAirdrops.DiscardUnknown(m)
}

var xxx_messageInfo_MsgAddAirdrops proto.InternalMessageInfo

// MsgMintBySwapResponse defines the Msg/AddAirdrops response type.
type MsgAddAirdropsResponse struct {
}

func (m *MsgAddAirdropsResponse) Reset()         { *m = MsgAddAirdropsResponse{} }
func (m *MsgAddAirdropsResponse) String() string { return proto.CompactTextString(m) }
func (*MsgAddAirdropsResponse) ProtoMessage()    {}
func (*MsgAddAirdropsResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_7ff1dd0df923de90, []int{1}
}
func (m *MsgAddAirdropsResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgAddAirdropsResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgAddAirdropsResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgAddAirdropsResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgAddAirdropsResponse.Merge(m, src)
}
func (m *MsgAddAirdropsResponse) XXX_Size() int {
	return m.Size()
}
func (m *MsgAddAirdropsResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgAddAirdropsResponse.DiscardUnknown(m)
}

var xxx_messageInfo_MsgAddAirdropsResponse proto.InternalMessageInfo

type MsgExecuteAirdrops struct {
	Sender string `protobuf:"bytes,1,opt,name=sender,proto3" json:"sender,omitempty"`
	// max count of airdrops performed this time
	MaxCount uint64 `protobuf:"varint,2,opt,name=max_count,json=maxCount,proto3" json:"max_count,omitempty"`
}

func (m *MsgExecuteAirdrops) Reset()         { *m = MsgExecuteAirdrops{} }
func (m *MsgExecuteAirdrops) String() string { return proto.CompactTextString(m) }
func (*MsgExecuteAirdrops) ProtoMessage()    {}
func (*MsgExecuteAirdrops) Descriptor() ([]byte, []int) {
	return fileDescriptor_7ff1dd0df923de90, []int{2}
}
func (m *MsgExecuteAirdrops) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgExecuteAirdrops) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgExecuteAirdrops.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgExecuteAirdrops) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgExecuteAirdrops.Merge(m, src)
}
func (m *MsgExecuteAirdrops) XXX_Size() int {
	return m.Size()
}
func (m *MsgExecuteAirdrops) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgExecuteAirdrops.DiscardUnknown(m)
}

var xxx_messageInfo_MsgExecuteAirdrops proto.InternalMessageInfo

type MsgExecuteAirdropsResponse struct {
}

func (m *MsgExecuteAirdropsResponse) Reset()         { *m = MsgExecuteAirdropsResponse{} }
func (m *MsgExecuteAirdropsResponse) String() string { return proto.CompactTextString(m) }
func (*MsgExecuteAirdropsResponse) ProtoMessage()    {}
func (*MsgExecuteAirdropsResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_7ff1dd0df923de90, []int{3}
}
func (m *MsgExecuteAirdropsResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgExecuteAirdropsResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgExecuteAirdropsResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgExecuteAirdropsResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgExecuteAirdropsResponse.Merge(m, src)
}
func (m *MsgExecuteAirdropsResponse) XXX_Size() int {
	return m.Size()
}
func (m *MsgExecuteAirdropsResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgExecuteAirdropsResponse.DiscardUnknown(m)
}

var xxx_messageInfo_MsgExecuteAirdropsResponse proto.InternalMessageInfo

// MsgSetAllocationAddress represents a message to set allocation address.
type MsgSetAllocationAddress struct {
	Sender                        string `protobuf:"bytes,1,opt,name=sender,proto3" json:"sender,omitempty"`
	TeamVestingAddr               string `protobuf:"bytes,2,opt,name=team_vesting_addr,json=teamVestingAddr,proto3" json:"team_vesting_addr,omitempty"`
	StrategicReserveCustodianAddr string `protobuf:"bytes,3,opt,name=strategic_reserve_custodian_addr,json=strategicReserveCustodianAddr,proto3" json:"strategic_reserve_custodian_addr,omitempty"`
}

func (m *MsgSetAllocationAddress) Reset()         { *m = MsgSetAllocationAddress{} }
func (m *MsgSetAllocationAddress) String() string { return proto.CompactTextString(m) }
func (*MsgSetAllocationAddress) ProtoMessage()    {}
func (*MsgSetAllocationAddress) Descriptor() ([]byte, []int) {
	return fileDescriptor_7ff1dd0df923de90, []int{4}
}
func (m *MsgSetAllocationAddress) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgSetAllocationAddress) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgSetAllocationAddress.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgSetAllocationAddress) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgSetAllocationAddress.Merge(m, src)
}
func (m *MsgSetAllocationAddress) XXX_Size() int {
	return m.Size()
}
func (m *MsgSetAllocationAddress) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgSetAllocationAddress.DiscardUnknown(m)
}

var xxx_messageInfo_MsgSetAllocationAddress proto.InternalMessageInfo

// MsgSetAllocationAddressResponse defines the Msg/SetAllocationAddress response
// type.
type MsgSetAllocationAddressResponse struct {
}

func (m *MsgSetAllocationAddressResponse) Reset()         { *m = MsgSetAllocationAddressResponse{} }
func (m *MsgSetAllocationAddressResponse) String() string { return proto.CompactTextString(m) }
func (*MsgSetAllocationAddressResponse) ProtoMessage()    {}
func (*MsgSetAllocationAddressResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_7ff1dd0df923de90, []int{5}
}
func (m *MsgSetAllocationAddressResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgSetAllocationAddressResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgSetAllocationAddressResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgSetAllocationAddressResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgSetAllocationAddressResponse.Merge(m, src)
}
func (m *MsgSetAllocationAddressResponse) XXX_Size() int {
	return m.Size()
}
func (m *MsgSetAllocationAddressResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgSetAllocationAddressResponse.DiscardUnknown(m)
}

var xxx_messageInfo_MsgSetAllocationAddressResponse proto.InternalMessageInfo

func init() {
	proto.RegisterType((*MsgAddAirdrops)(nil), "warmage.vesting.v1.MsgAddAirdrops")
	proto.RegisterType((*MsgAddAirdropsResponse)(nil), "warmage.vesting.v1.MsgAddAirdropsResponse")
	proto.RegisterType((*MsgExecuteAirdrops)(nil), "warmage.vesting.v1.MsgExecuteAirdrops")
	proto.RegisterType((*MsgExecuteAirdropsResponse)(nil), "warmage.vesting.v1.MsgExecuteAirdropsResponse")
	proto.RegisterType((*MsgSetAllocationAddress)(nil), "warmage.vesting.v1.MsgSetAllocationAddress")
	proto.RegisterType((*MsgSetAllocationAddressResponse)(nil), "warmage.vesting.v1.MsgSetAllocationAddressResponse")
}

func init() { proto.RegisterFile("warmage/vesting/v1/tx.proto", fileDescriptor_7ff1dd0df923de90) }

var fileDescriptor_7ff1dd0df923de90 = []byte{
	// 532 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x94, 0x94, 0x41, 0x6b, 0x13, 0x41,
	0x14, 0xc7, 0x77, 0x9a, 0x52, 0x92, 0x29, 0x58, 0x1c, 0x4a, 0x0d, 0x9b, 0xba, 0x89, 0x51, 0x4b,
	0x68, 0xed, 0x0e, 0x6d, 0xf1, 0x22, 0x78, 0x48, 0x8b, 0x88, 0x87, 0x5c, 0xb6, 0xe0, 0xc1, 0xcb,
	0x32, 0xdd, 0x79, 0x8c, 0x0b, 0xc9, 0x4c, 0x9c, 0x99, 0x84, 0xd5, 0xa3, 0x27, 0xf1, 0x24, 0x78,
	0xf0, 0xda, 0x6f, 0xa0, 0x1f, 0xa3, 0xc7, 0x82, 0x17, 0x4f, 0x45, 0x12, 0x0f, 0x7e, 0x0c, 0xc9,
	0x66, 0xb3, 0xa6, 0x6d, 0x96, 0xea, 0x6d, 0x67, 0xe6, 0xff, 0xfe, 0xff, 0xdf, 0xcc, 0x7b, 0x2c,
	0xae, 0xf5, 0x40, 0x77, 0x63, 0x25, 0xe9, 0x10, 0x8c, 0x8d, 0xa5, 0xa0, 0xc3, 0x3d, 0x6a, 0x13,
	0xbf, 0xaf, 0x95, 0x55, 0x84, 0x64, 0x87, 0x7e, 0x76, 0xe8, 0x0f, 0xf7, 0xdc, 0x4d, 0xa1, 0x94,
	0xe8, 0x02, 0x65, 0xfd, 0x98, 0x32, 0x29, 0x95, 0x65, 0x36, 0x56, 0xd2, 0x4c, 0x2b, 0xdc, 0x75,
	0xa1, 0x84, 0x4a, 0x3f, 0xe9, 0xe4, 0x2b, 0xdb, 0x6d, 0x2c, 0x08, 0x99, 0x59, 0xa6, 0x8a, 0xe6,
	0x1b, 0x7c, 0xab, 0x63, 0x44, 0x9b, 0xf3, 0x76, 0xac, 0xb9, 0x56, 0x7d, 0x43, 0x36, 0xf0, 0x8a,
	0x01, 0xc9, 0x41, 0x57, 0x51, 0x03, 0xb5, 0x2a, 0x41, 0xb6, 0x22, 0x4f, 0x71, 0x99, 0x65, 0x9a,
	0xea, 0x52, 0xa3, 0xd4, 0x5a, 0xdd, 0xaf, 0xf9, 0xd7, 0x31, 0xfd, 0xcc, 0xe7, 0x70, 0xf9, 0xec,
	0xa2, 0xee, 0x04, 0x79, 0xc9, 0x93, 0xf2, 0x87, 0xd3, 0xba, 0xf3, 0xfb, 0xb4, 0xee, 0x34, 0xab,
	0x78, 0xe3, 0x72, 0x64, 0x00, 0xa6, 0xaf, 0xa4, 0x81, 0xe6, 0x31, 0x26, 0x1d, 0x23, 0x9e, 0x25,
	0x10, 0x0d, 0x2c, 0xdc, 0x08, 0x54, 0xc3, 0x95, 0x1e, 0x4b, 0xc2, 0x48, 0x0d, 0xa4, 0xad, 0x2e,
	0x35, 0x50, 0x6b, 0x39, 0x28, 0xf7, 0x58, 0x72, 0x34, 0x59, 0xcf, 0xc5, 0x6d, 0x62, 0xf7, 0xba,
	0x69, 0x1e, 0xf9, 0x0d, 0xe1, 0x3b, 0x1d, 0x23, 0x8e, 0xc1, 0xb6, 0xbb, 0x5d, 0x15, 0xa5, 0x6f,
	0xda, 0xe6, 0x5c, 0x83, 0x29, 0x0e, 0xde, 0xc6, 0xb7, 0x2d, 0xb0, 0x5e, 0x98, 0xdd, 0x3a, 0x64,
	0x9c, 0xeb, 0x14, 0xa0, 0x12, 0xac, 0x4d, 0x0e, 0x5e, 0x4e, 0xf7, 0x27, 0x36, 0xe4, 0x39, 0x6e,
	0x18, 0xab, 0x99, 0x05, 0x11, 0x47, 0xa1, 0x06, 0x03, 0x7a, 0x08, 0x61, 0x34, 0x30, 0x56, 0xf1,
	0x98, 0xc9, 0x69, 0x69, 0x29, 0x2d, 0xbd, 0x9b, 0xeb, 0x82, 0xa9, 0xec, 0x68, 0xa6, 0x9a, 0x18,
	0xcd, 0x5d, 0xe8, 0x1e, 0xae, 0x17, 0x10, 0xcf, 0x6e, 0xb5, 0x7f, 0x51, 0xc2, 0xa5, 0x8e, 0x11,
	0xe4, 0x23, 0xc2, 0xab, 0xf3, 0xbd, 0x6d, 0x2e, 0xea, 0xd8, 0xe5, 0x66, 0xb8, 0xdb, 0x37, 0x6b,
	0xf2, 0xd7, 0xdb, 0x79, 0xff, 0xfd, 0xd7, 0xe7, 0xa5, 0x87, 0xe4, 0x3e, 0x5d, 0x38, 0xcd, 0x94,
	0x71, 0x1e, 0xce, 0x26, 0x80, 0x7c, 0x41, 0x78, 0xed, 0x6a, 0x6f, 0xb7, 0x0a, 0xc2, 0xae, 0xe8,
	0x5c, 0xff, 0xdf, 0x74, 0x39, 0xd8, 0xa3, 0x14, 0x6c, 0x8b, 0x3c, 0x28, 0x00, 0x83, 0x04, 0xa2,
	0xbf, 0x64, 0x5f, 0x11, 0x5e, 0x5f, 0x38, 0x01, 0x3b, 0x05, 0xb1, 0x8b, 0xc4, 0xee, 0xc1, 0x7f,
	0x88, 0x73, 0xd0, 0xc7, 0x29, 0x28, 0x25, 0xbb, 0x05, 0xa0, 0x06, 0x6c, 0xc8, 0xf2, 0xea, 0x74,
	0x5e, 0xc0, 0x98, 0xc3, 0x17, 0x67, 0x23, 0x0f, 0x9d, 0x8f, 0x3c, 0xf4, 0x73, 0xe4, 0xa1, 0x4f,
	0x63, 0xcf, 0x39, 0x1f, 0x7b, 0xce, 0x8f, 0xb1, 0xe7, 0xbc, 0xa2, 0x22, 0xb6, 0xaf, 0x07, 0x27,
	0x7e, 0xa4, 0x7a, 0x33, 0xcb, 0xdd, 0x77, 0x4a, 0x42, 0xee, 0x9f, 0xe4, 0x09, 0xf6, 0x6d, 0x1f,
	0xcc, 0xc9, 0x4a, 0xfa, 0x23, 0x38, 0xf8, 0x13, 0x00, 0x00, 0xff, 0xff, 0xdb, 0x46, 0x45, 0xcf,
	0x91, 0x04, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// MsgClient is the client API for Msg service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type MsgClient interface {
	// AddAirdrops adds airdrop targets.
	// Should only be called by core team multisig.
	AddAirdrops(ctx context.Context, in *MsgAddAirdrops, opts ...grpc.CallOption) (*MsgAddAirdropsResponse, error)
	// ExecuteAirdrops performs airdrops.
	// Should only be called by core team multisig.
	ExecuteAirdrops(ctx context.Context, in *MsgExecuteAirdrops, opts ...grpc.CallOption) (*MsgExecuteAirdropsResponse, error)
	// SetAllocationAddress sets allocation address of team vesting or
	// strategic_reserve_custodian.
	SetAllocationAddress(ctx context.Context, in *MsgSetAllocationAddress, opts ...grpc.CallOption) (*MsgSetAllocationAddressResponse, error)
}

type msgClient struct {
	cc grpc1.ClientConn
}

func NewMsgClient(cc grpc1.ClientConn) MsgClient {
	return &msgClient{cc}
}

func (c *msgClient) AddAirdrops(ctx context.Context, in *MsgAddAirdrops, opts ...grpc.CallOption) (*MsgAddAirdropsResponse, error) {
	out := new(MsgAddAirdropsResponse)
	err := c.cc.Invoke(ctx, "/warmage.vesting.v1.Msg/AddAirdrops", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *msgClient) ExecuteAirdrops(ctx context.Context, in *MsgExecuteAirdrops, opts ...grpc.CallOption) (*MsgExecuteAirdropsResponse, error) {
	out := new(MsgExecuteAirdropsResponse)
	err := c.cc.Invoke(ctx, "/warmage.vesting.v1.Msg/ExecuteAirdrops", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *msgClient) SetAllocationAddress(ctx context.Context, in *MsgSetAllocationAddress, opts ...grpc.CallOption) (*MsgSetAllocationAddressResponse, error) {
	out := new(MsgSetAllocationAddressResponse)
	err := c.cc.Invoke(ctx, "/warmage.vesting.v1.Msg/SetAllocationAddress", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// MsgServer is the server API for Msg service.
type MsgServer interface {
	// AddAirdrops adds airdrop targets.
	// Should only be called by core team multisig.
	AddAirdrops(context.Context, *MsgAddAirdrops) (*MsgAddAirdropsResponse, error)
	// ExecuteAirdrops performs airdrops.
	// Should only be called by core team multisig.
	ExecuteAirdrops(context.Context, *MsgExecuteAirdrops) (*MsgExecuteAirdropsResponse, error)
	// SetAllocationAddress sets allocation address of team vesting or
	// strategic_reserve_custodian.
	SetAllocationAddress(context.Context, *MsgSetAllocationAddress) (*MsgSetAllocationAddressResponse, error)
}

// UnimplementedMsgServer can be embedded to have forward compatible implementations.
type UnimplementedMsgServer struct {
}

func (*UnimplementedMsgServer) AddAirdrops(ctx context.Context, req *MsgAddAirdrops) (*MsgAddAirdropsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AddAirdrops not implemented")
}
func (*UnimplementedMsgServer) ExecuteAirdrops(ctx context.Context, req *MsgExecuteAirdrops) (*MsgExecuteAirdropsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ExecuteAirdrops not implemented")
}
func (*UnimplementedMsgServer) SetAllocationAddress(ctx context.Context, req *MsgSetAllocationAddress) (*MsgSetAllocationAddressResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SetAllocationAddress not implemented")
}

func RegisterMsgServer(s grpc1.Server, srv MsgServer) {
	s.RegisterService(&_Msg_serviceDesc, srv)
}

func _Msg_AddAirdrops_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MsgAddAirdrops)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MsgServer).AddAirdrops(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/warmage.vesting.v1.Msg/AddAirdrops",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MsgServer).AddAirdrops(ctx, req.(*MsgAddAirdrops))
	}
	return interceptor(ctx, in, info, handler)
}

func _Msg_ExecuteAirdrops_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MsgExecuteAirdrops)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MsgServer).ExecuteAirdrops(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/warmage.vesting.v1.Msg/ExecuteAirdrops",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MsgServer).ExecuteAirdrops(ctx, req.(*MsgExecuteAirdrops))
	}
	return interceptor(ctx, in, info, handler)
}

func _Msg_SetAllocationAddress_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MsgSetAllocationAddress)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MsgServer).SetAllocationAddress(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/warmage.vesting.v1.Msg/SetAllocationAddress",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MsgServer).SetAllocationAddress(ctx, req.(*MsgSetAllocationAddress))
	}
	return interceptor(ctx, in, info, handler)
}

var _Msg_serviceDesc = grpc.ServiceDesc{
	ServiceName: "warmage.vesting.v1.Msg",
	HandlerType: (*MsgServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "AddAirdrops",
			Handler:    _Msg_AddAirdrops_Handler,
		},
		{
			MethodName: "ExecuteAirdrops",
			Handler:    _Msg_ExecuteAirdrops_Handler,
		},
		{
			MethodName: "SetAllocationAddress",
			Handler:    _Msg_SetAllocationAddress_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "warmage/vesting/v1/tx.proto",
}

func (m *MsgAddAirdrops) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgAddAirdrops) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgAddAirdrops) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Airdrops) > 0 {
		for iNdEx := len(m.Airdrops) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.Airdrops[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintTx(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x12
		}
	}
	if len(m.Sender) > 0 {
		i -= len(m.Sender)
		copy(dAtA[i:], m.Sender)
		i = encodeVarintTx(dAtA, i, uint64(len(m.Sender)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *MsgAddAirdropsResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgAddAirdropsResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgAddAirdropsResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	return len(dAtA) - i, nil
}

func (m *MsgExecuteAirdrops) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgExecuteAirdrops) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgExecuteAirdrops) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.MaxCount != 0 {
		i = encodeVarintTx(dAtA, i, uint64(m.MaxCount))
		i--
		dAtA[i] = 0x10
	}
	if len(m.Sender) > 0 {
		i -= len(m.Sender)
		copy(dAtA[i:], m.Sender)
		i = encodeVarintTx(dAtA, i, uint64(len(m.Sender)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *MsgExecuteAirdropsResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgExecuteAirdropsResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgExecuteAirdropsResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	return len(dAtA) - i, nil
}

func (m *MsgSetAllocationAddress) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgSetAllocationAddress) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgSetAllocationAddress) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.StrategicReserveCustodianAddr) > 0 {
		i -= len(m.StrategicReserveCustodianAddr)
		copy(dAtA[i:], m.StrategicReserveCustodianAddr)
		i = encodeVarintTx(dAtA, i, uint64(len(m.StrategicReserveCustodianAddr)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.TeamVestingAddr) > 0 {
		i -= len(m.TeamVestingAddr)
		copy(dAtA[i:], m.TeamVestingAddr)
		i = encodeVarintTx(dAtA, i, uint64(len(m.TeamVestingAddr)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Sender) > 0 {
		i -= len(m.Sender)
		copy(dAtA[i:], m.Sender)
		i = encodeVarintTx(dAtA, i, uint64(len(m.Sender)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *MsgSetAllocationAddressResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgSetAllocationAddressResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgSetAllocationAddressResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	return len(dAtA) - i, nil
}

func encodeVarintTx(dAtA []byte, offset int, v uint64) int {
	offset -= sovTx(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *MsgAddAirdrops) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Sender)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	if len(m.Airdrops) > 0 {
		for _, e := range m.Airdrops {
			l = e.Size()
			n += 1 + l + sovTx(uint64(l))
		}
	}
	return n
}

func (m *MsgAddAirdropsResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	return n
}

func (m *MsgExecuteAirdrops) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Sender)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	if m.MaxCount != 0 {
		n += 1 + sovTx(uint64(m.MaxCount))
	}
	return n
}

func (m *MsgExecuteAirdropsResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	return n
}

func (m *MsgSetAllocationAddress) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Sender)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	l = len(m.TeamVestingAddr)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	l = len(m.StrategicReserveCustodianAddr)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	return n
}

func (m *MsgSetAllocationAddressResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	return n
}

func sovTx(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozTx(x uint64) (n int) {
	return sovTx(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *MsgAddAirdrops) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTx
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: MsgAddAirdrops: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgAddAirdrops: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Sender", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Sender = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Airdrops", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthTx
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Airdrops = append(m.Airdrops, Airdrop{})
			if err := m.Airdrops[len(m.Airdrops)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipTx(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthTx
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *MsgAddAirdropsResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTx
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: MsgAddAirdropsResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgAddAirdropsResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		default:
			iNdEx = preIndex
			skippy, err := skipTx(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthTx
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *MsgExecuteAirdrops) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTx
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: MsgExecuteAirdrops: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgExecuteAirdrops: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Sender", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Sender = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field MaxCount", wireType)
			}
			m.MaxCount = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.MaxCount |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipTx(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthTx
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *MsgExecuteAirdropsResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTx
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: MsgExecuteAirdropsResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgExecuteAirdropsResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		default:
			iNdEx = preIndex
			skippy, err := skipTx(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthTx
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *MsgSetAllocationAddress) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTx
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: MsgSetAllocationAddress: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgSetAllocationAddress: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Sender", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Sender = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field TeamVestingAddr", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.TeamVestingAddr = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field StrategicReserveCustodianAddr", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.StrategicReserveCustodianAddr = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipTx(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthTx
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *MsgSetAllocationAddressResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTx
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: MsgSetAllocationAddressResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgSetAllocationAddressResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		default:
			iNdEx = preIndex
			skippy, err := skipTx(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthTx
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipTx(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowTx
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowTx
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowTx
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthTx
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupTx
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthTx
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthTx        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowTx          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupTx = fmt.Errorf("proto: unexpected end of group")
)
