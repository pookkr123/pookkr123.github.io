---
title:  "Required Services"
excerpt: "소주제"
toc: true
toc_label: "페이지 주요 목차"
categories:
- 델피콤
tags:
- 개발팀
last_modified_at: 2019-08-20
---

## Required Services
Red Hat Enterprise Linux는 커널 레벨 지원과 데몬 프로세스의 조합을 사용하여 NFS 파일 공유를 제공합니다. 모든 NFS 버전은 클라이언트와 서버 간의 원격 프로 시저 호출 (RPC)에 의존합니다. Red Hat Enterprise Linux 7에서 RPC 서비스는 rpcbind 서비스에 의해 제어됩니다. NFS 파일 시스템을 공유하거나 마운트하려면 구현 된 NFS 버전에 따라 다음 서비스가 함께 작동합니다.

**Note**   
portmap 서비스는 이전 버전의 Red Hat Enterprise Linux에서 RPC 프로그램 번호를 IP 주소 포트 번호 조합으로 매핑하는 데 사용되었습니다. 이 서비스는 현재 Red Hat Enterprise Linux 7에서 rpcbind로 대체되어 IPv6을 지원합니다.

### **nfs**   
systemctl start nfs는 NFS 서버와 적절한 RPC 프로세스를 시작하여 공유 NFS 파일 시스템에 대한 요청을 처리합니다.

### **nfslock**   
systemctl start nfs-lock은 NFS 클라이언트가 서버의 파일을 잠글 수 있도록 적절한 RPC 프로세스를 시작하는 필수 서비스를 활성화합니다.

### **rpcbind**   
rpcbind는 로컬 RPC 서비스에서 포트 예약을 허용합니다. 이러한 포트는 해당 원격 RPC 서비스가 액세스 할 수 있도록 사용 가능하게 설정됩니다. rpcbind는 RPC 서비스에 대한 요청에 응답하고 요청 된 RPC 서비스에 대한 연결을 설정합니다. 이것은 NFSv4에서 사용되지 않습니다.

다음 RPC 프로세스는 NFS 서비스를 용이하게합니다.

### **rpc.mountd**   
이 프로세스는 NFS 서버가 NFSv3 클라이언트의 MOUNT 요청을 처리하는 데 사용됩니다. 요청 된 NFS 공유가 NFS 서버에 의해 현재 내보내지고 클라이언트가 액세스 할 수 있는지 확인합니다. 마운트 요청이 허용되면 rpc.mountd 서버는 성공 상태로 응답하고이 NFS 공유에 대한 파일 핸들을 NFS 클라이언트에 제공합니다.

### **rpc.nfsd**   
rpc.nfsd는 명시적인 NFS 버전과 서버가 광고를 정의하도록 허용합니다. NFS 클라이언트가 연결할 때마다 서버 스레드를 제공하는 것과 같이 NFS 클라이언트의 동적 요구를 충족시키기 위해 Linux 커널과 함께 작동합니다. 이 프로세스는 nfs 서비스에 해당합니다.

### **lockd**   
lockd는 클라이언트와 서버 모두에서 실행되는 커널 스레드입니다. NFSv3 클라이언트가 서버의 파일을 잠글 수있게하는 NLM (Network Lock Manager) 프로토콜을 구현합니다. NFS 서버가 실행될 때마다 그리고 NFS 파일 시스템이 마운트 될 때마다 자동으로 시작됩니다.

### **rpc.statd**   
이 프로세스는 NSM (Network Status Monitor) RPC 프로토콜을 구현합니다.이 프로토콜은 NFS 서버가 정상적으로 종료되지 않고 다시 시작될 때 NFS 클라이언트에 알립니다. rpc.statd는 nfslock 서비스에 의해 자동으로 시작되며 사용자 구성이 필요하지 않습니다. 이것은 NFSv4에서 사용되지 않습니다.

### **rpc.rquotad**   
이 프로세스는 원격 사용자에 대한 사용자 할당량 정보를 제공합니다. rpc.rquotad는 nfs 서비스에 의해 자동으로 시작되며 사용자 구성을 필요로하지 않습니다.

### **rpc.idmapd**   
rpc.idmapd는 on-the-wire NFSv4 이름 (user @ domain 형식의 문자열)과 로컬 UID 및 GID 사이를 매핑하는 NFSv4 클라이언트 및 서버 업 콜을 제공합니다. idmapd가 NFSv4와 함께 작동하려면 /etc/idmapd.conf 파일을 구성해야합니다. 최소한 NFSv4 매핑 도메인을 정의하는 "Domain"매개 변수를 지정해야합니다. NFSv4 매핑 도메인이 DNS 도메인 이름과 같으면이 매개 변수를 건너 뛸 수 있습니다. ID 매핑이 제대로 작동하려면 클라이언트와 서버가 NFSv4 매핑 도메인에 동의해야합니다.

**Note**  
Red Hat Enterprise Linux 7에서는 NFSv4 서버 만 rpc.idmapd를 사용합니다. NFSv4 클라이언트는 키링 기반 idmapper nfsidmap을 사용합니다. nfsidmap은 ID 매핑을 수행하기 위해 필요시 커널에 의해 호출되는 독립 실행 형 프로그램입니다. 그것은 데몬이 아닙니다. nfsidmap에 문제가 있으면 클라이언트는 rpc.idmapd를 사용하여 폴백합니다. nfsidmap에 대한 자세한 내용은 nfsidmap 매뉴얼 페이지를 참조하십시오.

