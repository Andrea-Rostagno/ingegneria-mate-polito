---
tipo: competenza
area: informatica
corsi: [Crittografia, Blockchain e criptoeconomia]
livello: [magistrale]
aliases: [commitment scheme, schema di impegno, impegno crittografico, hiding, binding, segretezza e non ambiguità, coin flipping by telephone, lancio di moneta al telefono]
tags: [competenza, area/informatica]
---

# Bit commitment

> Protocollo in due fasi con cui Alice si impegna su un valore $b$ senza rivelarlo. In seguito lo rivela, e Bob può verificare che non l'ha cambiato.

## Definizione / enunciato
Uno schema di commitment è formato da un algoritmo $\mathrm{Com}$ e da due fasi:
- **commit:** Alice invia $c=\mathrm{Com}(b,r)$, con $r$ casuale;
- **reveal (apertura):** Alice rivela $b$ e Bob controlla che $c=\mathrm{Com}(b,r)$.

È **sicuro** se ha due proprietà:
1. **hiding** (segretezza): dopo la prima fase Bob, anche disonesto, non ha informazioni su $b$;
2. **binding** (non ambiguità): per un dato $c$ esiste un solo $b$ con cui Alice, anche disonesta, possa convincere Bob.

## Formule chiave
Le slide di Bazzanella danno tre realizzazioni:
- **con un cifrario simmetrico:**
  1. $B$ manda una stringa casuale $R$;
  2. $A$ invia $E_k(R\,\|\,b)$;
  3. in seguito $A$ rivela $k$.

  La stringa $R$ impedisce ad Alice di cercare una chiave che decifri nel bit voluto.
- **con un PRNG:** $B$ invia bit casuali $R_B$. Per ogni bit, $A$ invia il bit di $R_A$ (generato dal seme $s$) se il bit di $R_B$ è 0, oppure lo XOR fra il bit di $R_A$ e la previsione se è 1. In seguito $A$ rivela $s$.
- **con una funzione hash:** $A$ sceglie due stringhe casuali $R_1,R_2$ e invia
$$R_1,\qquad y=H(R_1\|R_2\|b);$$
  poi rivela $R_2$ e $b$, e $B$ verifica $y=H(R_1\|R_2\|b)$.

## Intuizione
È la versione digitale del forziere chiuso col lucchetto consegnato a Bob: Bob non lo apre (hiding) e Alice non può più cambiarne il contenuto (binding). La versione con l'hash è preferita perché la sicurezza si riduce alla difficoltà di invertire $H$.

## Come si usa
**Lancio di moneta al telefono** (Crypto 7, Ex. 7.3.1): Alice si impegna sul bit $b_A$, Bob manda $b_B$, Alice apre, e il risultato è $b=b_A\oplus b_B$. Nessuno dei due può truccarlo.

## Nei corsi
- **Crittografia** (magistrale): nelle dispense di Di Scala (definizione con hiding e binding) e nelle slide di Bazzanella (tre protocolli). Fonti: `magistrale/Crittografia/Slide/slides week 1-14/week7/Crypto7.pdf` (§7.3, pp. 13-14); `magistrale/Crittografia/Slide/slide crittografia italiano/slide critto italiano/Critto12.pdf` (pp. 3-9).
- **Blockchain e criptoeconomia** (magistrale): il termine non compare. L'idea c'è fra gli usi delle hash ("dimostrazione di possedere un documento senza mostrarlo": si pubblica l'hash e si mostra il documento più tardi) e nell'**hashlock** di Bitcoin, dove si pubblica $H=\text{Hash}(S)$ e si rivela $S$ per sbloccare i fondi. Fonti: `magistrale/Blockchain e criptoeconomia/01-Strumenti.pdf` (p. 7); `03-Bitcoin.pdf` (p. 108).

## Prerequisiti
- [[Funzione hash crittografica]]: realizzazione $H(R_1\|R_2\|b)$
- [[Funzione one-way]]: hiding dato dalla difficoltà di inversione

## Porta a
- [[Prova a conoscenza nulla]]: impegnarsi su un valore prima della sfida

## Collegati
- [[Numeri pseudo-casuali]]: variante basata su un generatore pseudo-casuale
- [[Schema di cifratura simmetrica]]: variante basata su un cifrario
- [[Hashed Timelock Contract]]: l'hashlock impegna su un segreto rivelato dopo (Blockchain e criptoeconomia)
