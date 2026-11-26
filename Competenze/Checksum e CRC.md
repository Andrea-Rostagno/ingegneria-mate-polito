---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: [checksum, somma di controllo, CRC, cyclic redundancy check, controllo di ridondanza ciclico, LRC, longitudinal redundancy check, Internet checksum, RFC-1071, bit di parità, CRC-8, CRC-32]
tags: [competenza, area/informatica]
---

# Checksum e CRC

> Un checksum è una breve sequenza di bit calcolata da un messaggio per verificarne l'integrità su un canale. Il CRC tratta il messaggio come un polinomio in $\mathbb Z_2[x]$ e ne prende il resto modulo un polinomio fissato $g(x)$.

## Definizione / enunciato
- **Bit di parità** (Critto 9, p. 3): il checksum più banale. È veloce e aggiunge pochissimi dati, ma non rileva scambi d'ordine dei bit, aggiunte di zeri, né errori su un numero pari di bit.
- **Internet checksum** (RFC 1071, p. 5): somma in complemento a 1 di parole da 16 bit, con riporto circolare (wraparound); il checksum è il complemento a 1 della somma. In ricezione si somma anche il checksum: se si ottiene una sequenza di soli 1, il controllo è superato.
- **CRC** (p. 6): la sequenza di bit è identificata con i coefficienti di un polinomio di $\mathbb Z_2[x]$ e ridotta modulo $g(x)$.

## Formule chiave
$$a(x)\equiv b(x)\pmod{g(x)}\iff g(x)\mid b(x)-a(x).$$
Polinomi $g(x)$ in uso (p. 7):
- CCITT-32 (Ethernet): $x^{32}+x^{26}+x^{23}+x^{22}+x^{16}+x^{12}+x^{11}+x^{10}+x^8+x^7+x^5+x^4+x^2+x+1$;
- CCITT-16: $x^{16}+x^{12}+x^5+1$;
- CRC-16: $x^{16}+x^{15}+x^2+1$;
- CRC-8: $x^8+x^2+x+1$.

L'**LRC** equivale a ridurre modulo $x^8+1$, perché $x^8\equiv1$ e quindi $x^{8+i}\equiv x^i$ (p. 11).

## Intuizione
Ridurre modulo $g(x)$ è un "resto della divisione" tra polinomi a coefficienti in $\mathbb Z_2$. Un piccolo cambiamento del messaggio altera molti bit del resto. Non c'è però alcuna chiave né difficoltà computazionale: il checksum protegge da errori casuali, non da manomissioni intenzionali.

## Come si usa
Esempio CRC-8 delle slide (pp. 8-10). Il messaggio $1001\,0000\,0110\,0101$ corrisponde a $p(x)=x^{15}+x^{12}+x^6+x^5+x^2+1$. Da $x^8\equiv x^2+x+1$ seguono
$$x^{12}\equiv x^5+x^4+x^2+x+1,\qquad x^{15}\equiv x^7+x^5+x^4+x^3+x^2+x+1,$$
e sommando
$$p(x)\equiv x^7+x^6+x^5+x^3+x^2+1 \pmod{x^8+x^2+x+1},$$
cioè il checksum **1110 1101**. Cambiando un solo bit (messaggio $1000\,0000\,0110\,0101$) il checksum diventa $1101\,1010$: 5 bit diversi su 8.

L'ultimo carattere del codice fiscale è un checksum (p. 14). Il CRC-32 è il controllo d'integrità del protocollo WEP (p. 27).

## Nei corsi
- **Crittografia** (magistrale): prima parte delle slide di Bazzanella "Checksum, MAC e funzioni hash". Fonti: `magistrale/Crittografia/Slide/slide crittografia italiano/slide critto italiano/Critto9.pdf` (pp. 3-12, 14).

## Prerequisiti
- [[Divisione tra polinomi]]: il CRC è un resto in $\mathbb Z_2[x]$
- [[Classi di resto modulo n]]: stessa idea di congruenza, qui tra polinomi

## Porta a
- [[Protocolli WEP e WPA]]: WEP usa il CRC-32 per l'integrità

## Collegati
- [[Funzione hash crittografica]]: il checksum è l'esempio più semplice di funzione hash, senza resistenza alle collisioni
- [[Message authentication code]]: integrità con chiave, resistente alle manomissioni
- [[Anello dei polinomi]]: i messaggi come elementi di $\mathbb Z_2[x]$
