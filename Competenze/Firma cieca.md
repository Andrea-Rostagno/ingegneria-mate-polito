---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: ["blind signature", "firma cieca RSA", "RSA blind signature", "blinding factor", "fattore di accecamento", "firma alla cieca"]
tags: [competenza, area/informatica]
---

# Firma cieca

> È un protocollo con cui un firmatario appone la firma a un documento senza conoscerne il contenuto. Con RSA si realizza grazie alla moltiplicatività: si "acceca" il messaggio con un fattore casuale e lo si toglie dopo la firma. È la base del denaro elettronico anonimo.

## Definizione / enunciato
Il concetto è di David Chaum (1983).

**Schema completamente cieco** (`Crypto10.pdf` §10.5.3, da Schneier):
1. Alice moltiplica il documento per un valore casuale, il **blinding factor**;
2. Bob firma il documento accecato;
3. Alice divide per il fattore e ottiene il documento originale firmato da Bob.

Senza vincoli Alice può far firmare qualunque cosa, quindi così com'è il protocollo serve a poco.

**Firma cieca RSA** (§10.5.4). Bob ha $e$, $d$, $n$; Alice vuole far firmare $m$:
1. sceglie $k$ casuale tra $1$ e $n$ e calcola $t=mk^e \bmod n$;
2. Bob firma $t$: $t^d=(mk^e)^d \bmod n$;
3. Alice toglie il fattore: $s=t^d/k \bmod n$;
4. risultato: $s=m^d \bmod n$.

## Formule chiave
$$t^d=(mk^e)^d=m^d k^{ed}=m^d k\pmod n\ \Rightarrow\ s=t^d k^{-1}=m^d\pmod n$$

## Intuizione
La funzione segreta di RSA è un omomorfismo rispetto al prodotto: $f^{-1}(M f(R))=f^{-1}(M)\,R$ (`Critto12.pdf` pp. 18-19). Il firmatario vede solo $mk^e$, che è uniformemente "mascherato" da $k$, ma la firma che produce si trasforma nella firma di $m$.

## Come si usa
**Versione di Bazzanella** (`Critto12.pdf` p. 19):
- l'utente sceglie una stringa casuale $R$ e invia all'arbitro $Mf(R)$, con $f$ cifratura pubblica dell'arbitro;
- l'arbitro restituisce $f^{-1}(Mf(R))=f^{-1}(M)R$;
- l'utente moltiplica per $R^{-1}$ e ottiene $f^{-1}(M)$, che può esibire come firmato dall'arbitro.

Esempio d'uso: deposito di un brevetto. È fondamentale nel **denaro elettronico**: la banca firma le monete senza sapere a chi andranno, preservando l'anonimato del cliente (pp. 20-22).

## Nei corsi
- **Crittografia** (magistrale): week 10 (Di Scala, con il paper di Chaum da leggere) e protocolli avanzati di Bazzanella. Fonti:
  - `magistrale/Crittografia/Slide/slides week 1-14/week10/Crypto10.pdf` (§10.5.2-10.5.4, pp. 11-12);
  - `magistrale/Crittografia/Slide/slide crittografia italiano/slide critto italiano/Critto12.pdf` (pp. 18-19).

## Prerequisiti
- [[Firma RSA]]: la firma usata è $m^d \bmod n$
- [[RSA]]: omomorfismo moltiplicativo
- [[Algoritmo di Euclide]]: inverso di $k$ modulo $n$

## Porta a
- [[Denaro elettronico]]: monete firmate in modo anonimo

## Collegati
- [[Firma digitale]]: variante che nasconde il contenuto al firmatario
- [[Marcatura temporale]]: altro protocollo con un arbitro che firma
