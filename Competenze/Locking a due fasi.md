---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati]
livello: [magistrale]
aliases: ["2PL", "two-phase locking", "2 Phase Locking", "2PL stretto", "strict 2PL", "lock manager", "tabella dei conflitti", "read lock", "write lock", "R-Lock", "W-Lock", "lock escalation"]
tags: [competenza, area/informatica]
---

# Locking a due fasi

> Protocollo di controllo della concorrenza usato dalla maggior parte dei DBMS commerciali: una transazione non può acquisire nuovi lock dopo averne rilasciato uno; la versione stretta rilascia i lock solo alla fine.

## Definizione / enunciato
**Lock**: blocco su una risorsa. Ogni lettura è preceduta da un **R-Lock** (condiviso tra transazioni, con un contatore dei detentori; libero quando vale 0) e seguita da unlock; ogni scrittura da un **W-Lock** (esclusivo, incompatibile con qualsiasi altro lock). *Lock escalation*: R-Lock seguito da W-Lock sullo stesso dato.

Lo scheduler diventa un **lock manager**: concede i lock in base a quelli già concessi, usando la **tabella dei lock** (in memoria centrale; per ogni oggetto 2 bit per i tre stati libero/r_locked/w_locked e un contatore delle transazioni in attesa) e la **tabella dei conflitti**. Se il lock non è concesso, la transazione attende in coda finché la risorsa si libera.

**2PL**: fase crescente (si acquisiscono i lock) e fase calante (si rilasciano); una transazione non può acquisire un nuovo lock dopo averne rilasciato uno. Il 2PL garantisce la serializzabilità.

**2PL stretto**: i lock si rilasciano solo alla fine della transazione (dopo COMMIT/ROLLBACK), quando i dati sono stabili; permette di togliere l'ipotesi di commit projection ed evita il **dirty read**.

## Formule chiave
Tabella dei conflitti (richiesta / stato della risorsa):

| | Free | R-Locked | W-Locked |
|---|---|---|---|
| R-Lock | Ok / R-Locked | Ok / R-Locked | No / W-Locked |
| W-Lock | Ok / W-Locked | No / R-Locked | No / W-Locked |
| Unlock | Error | Ok / dipende (libero se nessun altro R-Lock) | Ok / Free |

Probabilità di conflitto $\approx \dfrac{K\times M}{N}$ ($K$ transazioni attive, $M$ oggetti medi per transazione, $N$ oggetti nella base di dati).
Primitive: `R-Lock(T, x, ErrorCode, TimeOut)`, `W-Lock(T, x, ErrorCode, TimeOut)`, `UnLock(T, x)`.

## Intuizione
Finché una transazione "cresce" nessuno può toccare ciò che ha bloccato; il punto in cui ha tutti i lock fissa il suo posto nell'ordine seriale equivalente.

## Come si usa
- Esempio: $S=r_1(x)\,w_1(x)\,r_2(x)\,w_2(x)\,r_3(y)\,w_1(y)$ è CSR ma non 2PL (T1 dovrebbe rilasciare $x$ e poi acquisire $y$): 2PL ⊂ CSR ⊂ VSR.
- Ghost update (a) con 2PL: T2 chiede w_lock su $y$ mentre T1 ha r_lock e resta in attesa finché T1 fa commit e unlock: l'anomalia sparisce.
- Se scade il **timeout**, il lock manager risveglia la transazione con errore "not ok": può fare rollback (e ripartire) o richiedere lo stesso lock più tardi senza rilasciare gli altri.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): "2 Phase Locking". Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/06 - 17-ConcurrencyControl_new.pdf` (pp. 38-57).

## Prerequisiti
- [[Conflict-serializzabilità]]: 2PL genera schedule CSR

## Porta a
- [[Locking gerarchico]]: lock a più granularità
- [[Deadlock]]: attese circolari sui lock
- [[Livelli di isolamento SQL]]: livelli realizzati tramite lock

## Collegati
- [[Controllo ottimistico della concorrenza]]: approccio ottimistico contro pessimistico
