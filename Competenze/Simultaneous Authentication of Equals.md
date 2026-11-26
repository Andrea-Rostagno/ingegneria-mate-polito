---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: [SAE, Dragonfly, WPA3 SAE, password element, PWE, scambio di chiavi tra pari basato su password]
tags: [competenza, area/informatica]
---

# Simultaneous Authentication of Equals

> Scambio di chiavi autenticato da password, **paritario**: nessuno dei due è iniziatore o server e i messaggi non hanno un ordine fisso. È il protocollo usato da WPA3 per il Wi-Fi.

## Definizione / enunciato
Due utenti condividono una password $P$. I parametri sono:
- un gruppo ciclico finito $\Gamma$ di $r$ elementi (DH o curve ellittiche);
- una funzione d'ordine $L$ fra due utenti;
- un oracolo casuale one-way $H:\{0,1\}^*\to\{0,1\}^s$;
- una KDF, $\text{bigstr}=\mathrm{KDF}(\text{smallstr},\text{length})$;
- una biiezione $F$ da $\Gamma$ a un insieme di numeri.

Prima di scambiarsi messaggi, entrambi derivano dalla password un **password element** $PWE\in\Gamma$ (§14.1.3-14.1.4, nelle varianti ECC e DH).

## Formule chiave
Ciascuno, per esempio Alice, sceglie $rand_A$ e $mask_A$ casuali e calcola
$$scal_A=(rand_A+mask_A)\bmod r,\qquad elem_A=(mask_A\cdot PWE)^{-1},$$
poi invia $(scal_A,elem_A)$. Alla ricezione:
$$K=rand_A\cdot(scal_B\cdot PWE\cdot elem_B),\qquad k=F(K),$$
$$tok_A=H\big(k\,\|\,F(elem_A)\,\|\,scal_A\,\|\,F(elem_B)\,\|\,scal_B\big).$$
Verificati i token, la chiave condivisa è
$$R=H\big(k\,\|\,F(elem_A\cdot elem_B)\,\|\,(scal_A+scal_B)\bmod r\big).$$

## Intuizione
Il gruppo è scritto in notazione moltiplicativa con esponenti scalari. Sostituendo:
- $scal_B\cdot PWE\cdot elem_B$ si riduce a "$rand_B\cdot PWE$";
- Alice ottiene quindi $K=rand_A\,rand_B\cdot PWE$, e Bob lo stesso valore.

Questo controllo è un calcolo nostro sulle formule della dispensa. Senza la password non si conosce $PWE$, e ogni tentativo richiede un'interazione: non c'è attacco del dizionario offline. I token confermano che entrambi hanno la stessa $k$.

## Come si usa
Autenticazione nelle reti mesh e nei punti di accesso WPA3. Con EKE e SRP è uno dei tre protocolli di scambio basati su password del corso.

## Nei corsi
- **Crittografia** (magistrale): dispense di Di Scala, settimana 14, dal paper di Harkins (2008), presente anche in `week13/Simultaneous Authentication of Equals.pdf`. Fonti: `magistrale/Crittografia/Slide/slides week 1-14/week14/Crypto14.pdf` (§14.1 pp. 2-4; il protocollo è stato letto sulla pagina renderizzata a p. 4; la costruzione di PWE a p. 3 è in figura, da verificare sul PDF).

## Prerequisiti
- [[Gruppo ciclico]]: $\Gamma$ di ordine $r$, scalari modulo $r$
- [[Encrypted Key Exchange]]: scambio di chiavi autenticato da password

## Porta a
- Nessuno.

## Collegati
- [[Scambio di chiavi Diffie-Hellman]]: SAE-DH ne è una variante con password
- [[Curva ellittica]]: variante SAE-ECC
- [[Secure Remote Password]]: alternativa client-server con verificatore
- [[Protocolli WEP e WPA]]: SAE è l'handshake di WPA3
