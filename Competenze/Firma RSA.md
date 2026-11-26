---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: ["RSA signature", "firma digitale RSA", "RSA digital signature", "naive RSA signature", "textbook RSA signature", "EMSA-PSS", "RSA-PSS", "Probabilistic Signature Scheme"]
tags: [competenza, area/informatica]
---

# Firma RSA

> Si firma applicando la funzione segreta di RSA, $\sigma=m^d \bmod n$, e si verifica con quella pubblica, $\sigma^e\equiv m$. La versione "naive" si falsifica facilmente, perciò in pratica si firma una codifica probabilistica con hash e sale (EMSA-PSS).

## Definizione / enunciato
**Firma RSA naive** (`Crypto10.pdf` §10.2.1). Bob ha chiave pubblica $pk_B=(n,e)$ e chiave segreta $sk_B=d$:
$$\sigma=\mathrm{Sign}_{sk_B}(m)=m^d \pmod n,\qquad \mathrm{Vrfy}_{pk_B}(m,\sigma)=1\iff\sigma^e\equiv m\pmod n.$$

**Non è sicura** (Exercise 10.2.2): si sceglie un qualunque $\sigma\in\mathbb Z_n$ e si pone $m=\sigma^e \bmod n$, ottenendo una coppia $(m,\sigma)$ valida senza conoscere $d$ (falsificazione esistenziale).

**EMSA-PSS** (PKCS #1). Il messaggio viene codificato in $EM$ con hash, padding fissi (padding1 = otto byte `00`) e un **sale casuale**, poi si firma $\sigma=EM^d \bmod n$. Il sale rende la codifica probabilistica: firmare due volte lo stesso messaggio dà firme diverse. La verifica recupera il sale e controlla che la codifica sia corretta (`Crypto10.pdf` §10.2.1, p. 5; la figura dello schema è un'immagine, da verificare sul PDF).

## Formule chiave
$$\sigma\equiv m^d,\quad \sigma^e\equiv m^{de}\equiv m\pmod n$$

## Intuizione
Firma e cifratura RSA usano la stessa trapdoor in direzioni opposte: solo chi ha $d$ può "invertire" $x\mapsto x^e$. Ma la mappa è moltiplicativa e chiunque può calcolarla in avanti. Per questo, senza hash e padding, si fabbricano coppie valide e si combinano firme (la stessa proprietà sfruttata dalla firma cieca).

## Come si usa
**Protocollo di Bazzanella** con moduli diversi. Con $f_X$ funzione pubblica e $f_X^{-1}$ segreta dell'utente $X$:
- se $n_A<n_B$, A sceglie e pubblica $s_A\in\mathbb Z_{n_A}$ e allega $m_A=f_B(f_A^{-1}(s_A))$; B verifica che $f_A(f_B^{-1}(m_A))=s_A$;
- se $n_A>n_B$, A allega $m_A=f_A^{-1}(f_B(s_A \bmod n_B))$ (`Critto10.pdf` pp. 10-11).

Il problema residuo è che B può ricavare $f_A^{-1}(s_A)$ e riusarlo. Rimedi: inserire in $s_A$ un contatore oppure farlo dipendere dal messaggio, per esempio con $h(M)$ (pp. 8, 11).

## Nei corsi
- **Crittografia** (magistrale): parte Di Scala (week 10) e protocolli di base di Bazzanella. Fonti:
  - `magistrale/Crittografia/Slide/slides week 1-14/week10/Crypto10.pdf` (§10.2, pp. 4-5);
  - `magistrale/Crittografia/Slide/slide crittografia italiano/slide critto italiano/Critto10.pdf` (pp. 6-11).

## Prerequisiti
- [[RSA]]: stesse chiavi $(n,e)$ e $d$
- [[Firma digitale]]: schema (Gen, Sign, Vrfy)
- [[Funzione hash crittografica]]: si firma il digest o la codifica

## Porta a
- [[Firma cieca]]: sfrutta la moltiplicatività di RSA

## Collegati
- [[RSA con padding]]: analogo probabilistico lato cifratura
- [[Firma ElGamal]]: alternativa basata sul logaritmo discreto
- [[DSA]]: standard NIST alternativo
